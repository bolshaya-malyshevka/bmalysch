<?php
if (!defined('MODX_BASE_PATH')) {
	http_response_code(403);
	die('Go fuck yourself'); 
}

if (!$modx->hasPermission('exec_module')) {
	$modx->sendRedirect('index.php?a=106');
}

if (!is_array($modx->event->params)) {
	$modx->event->params = [];
}
$params = $modx->event->params;
$params["folders"] = $params["folders"] ? (string)$params["folders"] : 'food';

// Директория модуля
$base_path = str_replace('\\', '/', dirname(__FILE__)) . '/';
define('SCHOOL_FOLDERS_BASE_PATH', $base_path);

// Разрешённые директории
$access_path = explode(',', $params["folders"]);

global $_lang, $content, $_style, $manager_language;

// Языковые пакеты
include_once SCHOOL_FOLDERS_BASE_PATH . "lang/english.inc.php";
if(!isset($manager_language) || !file_exists(SCHOOL_FOLDERS_BASE_PATH . "lang/".$manager_language.".inc.php")) {
	$manager_language = "english"; // if not set, get the english language file.
}

if($manager_language!="english" && file_exists(SCHOOL_FOLDERS_BASE_PATH . "lang/".$manager_language.".inc.php")) {
	include_once SCHOOL_FOLDERS_BASE_PATH . "lang/" . $manager_language.".inc.php";
}

// Массивы директорий и файлов
$directorys = [];
$files = [];

// Удаление предыдущей директории из строки.
function removeLastPath($string)
{
	$pos = strrpos($string, '/');
	if ($pos !== false) {
		$path = substr($string, 0, $pos);
	} else {
		$path = false;
	}
	return $path;
}

// Получаем имя директории
function getDirName($string) {
	$string = rtrim($string, '/');
	$string = str_replace(MODX_BASE_PATH, '', $string);
	return $string;
}

// Размер директории
function dir_size($path) {
	$path = rtrim($path, '/');
	$size = 0;
	$dir = opendir($path);
	if (!$dir) {
		return 0;
	}
	
	while (false !== ($file = readdir($dir))) {
		if ($file == '.' || $file == '..') {
			continue;
		} elseif (is_dir($path . $file)) {
			$size += dir_size($path . DIRECTORY_SEPARATOR . $file);
		} else {
			$size += filesize($path . DIRECTORY_SEPARATOR . $file);
		}
	}
	closedir($dir);
	return $size;
}

// Соответствует ли директория к правилам просмотра
function checkedPath($string, $access_path = []) {
	if($string == MODX_BASE_PATH):
		return true;
	endif;
	$string = getDirName($string);
	return in_array($string, $access_path);
}

// Получаем модуль
function getModule() {
	$evo = EvolutionCMS();
	$id = $_GET['id'] ? (int)$_GET['id'] : 0;
	$result = $evo->db->select('id,name,icon', $evo->getFullTablename('site_modules'), "id='$id'");
	if($row = $evo->db->getRow($result)):
		return $row;
	endif;
	return false;
}

function renameFile($string){
	$pathinfo = [];
	if(is_file($string)):
		$pathinfo = pathinfo($string);
	endif;
	return $pathinfo;
}

$module = getModule();

$module["icon"] = trim($module["icon"]) ? trim($module["icon"]) : "fa fa-cube";

// Prevent php 8 warnings
$_POST['mode'] = $_POST['mode'] ?? '';
$_GET['mode'] = $_GET['mode'] ?? '';
$_REQUEST['mode'] = $_REQUEST['mode'] ?? '';
$_REQUEST['path'] = $_REQUEST['path'] ?? '';

$path = $_REQUEST['path'];

$startpath = MODX_BASE_PATH;
// Получаем рабочую директорию
if (isset($_REQUEST['path']) && !empty($_REQUEST['path'])) {
	$_REQUEST['path'] = str_replace('..', '', $_REQUEST['path']);
	$startpath = is_dir($_REQUEST['path']) ? $_REQUEST['path'] : removeLastPath($_REQUEST['path']);
} 

if(!checkedPath($startpath, $access_path)):
	$modx->sendRedirect('index.php?a=112&id=' . $module['id'] . '&mode=dir&path=' . MODX_BASE_PATH);
endif;

// Формируем путь к директории
$startpath = $startpath == '/' ? '/' : rtrim($startpath, '/');

$startpath = checkedPath($startpath, $access_path) ? $startpath : rtrim(MODX_BASE_PATH, '/');

if (!is_readable($startpath)) {
	$modx->webAlertAndQuit($_lang["not_readable_dir"]);
}

$exts = ["xlsx", "pdf"];

setlocale(LC_NUMERIC, 'C');


// Files upload
if($_REQUEST['mode'] == 'upload'):
	//$modx->webAlertAndQuit($_lang["not_readable_dir"]);
	$modx->sendRedirect('index.php?a=112&id=' . $module['id'] . '&mode=dir&path=' . $startpath);
endif;


ob_start();
include_once MODX_MANAGER_PATH . 'includes/header.inc.php';

$file_path = ltrim($startpath, MODX_BASE_PATH);
$dir = new DirectoryIterator($startpath);

foreach ($dir as $fileinfo):
	if (!$fileinfo->isDot()):
		if($fileinfo->isDir()):
			$filename = $fileinfo->getFilename();
			if(in_array($filename, $access_path)):
				$directorys[] = $fileinfo->getFilename();
			endif;
		else:
			if(checkedPath($startpath, $access_path)):
				// Файлы
				$ext = strtolower($fileinfo->getExtension());
				if(in_array($ext, $exts)):
					$files[] = $fileinfo->getFilename();
				endif;
			endif;
		endif;
	endif;
endforeach;
sort($directorys);
rsort($files);
$title_path = pathinfo($startpath, PATHINFO_BASENAME);
$title = checkedPath($startpath, $access_path) ? 'Директория: ' . $title_path : 'Директории';

include_once SCHOOL_FOLDERS_BASE_PATH . 'template.php';

include_once MODX_MANAGER_PATH . 'includes/footer.inc.php';
echo ob_get_clean();


