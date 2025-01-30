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

global $_lang, $content, $_style, $manager_language, $new_folder_permissions, $new_file_permissions, $startpath, $exts, $msg;

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
// Вывод сообщений
$all = [];
$all['error'] = "";
$all['success'] = "";

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
	$modx = evolutionCMS();
	global $_lang, $startpath, $new_file_permissions, $exts;
	$msg = '';
	$all = [];
	$all['error'] = "";
	$all['success'] = "";
	if(is_file($string)):
		$pathinfo = pathinfo($string);
		$ext = $pathinfo['extension'] ? $pathinfo['extension'] : '';
		$ext = strtolower($ext);
		$filename = strtolower($pathinfo['filename'] ? $pathinfo['filename'] : '');
		if($ext):
			if(in_array($ext, $exts)):
				$filename = implode('.', array($filename, $ext));
				$filename_full = implode('/', array($startpath, $filename));
				$all['success'] = $filename_full;
			else:
				// Нельзя использовать расширение
			endif;
		else:
			// Нельзя переименовывать расширения
		endif;
		/*
		Array
		(
		    [dirname] => /path
		    [basename] => emptyextension.sdfsdf
		    [extension] => sdfsdf
		    [filename] => emptyextension
		)
	*/
	endif;
	return $all;
}

function fileupload()
{
	$modx = evolutionCMS();
	global $_lang, $startpath, $new_file_permissions, $exts;
	$msg = '';
	$all = [];
	$all['error'] = "";
	$all['success'] = "";
	foreach ($_FILES['userfiles']['name'] as $i => $name):
		if (empty($_FILES['userfiles']['tmp_name'][$i])) continue;
		$msg = "";
		$userfile= array();
		$name = strtolower($_FILES['userfiles']['name'][$i]);
		$name = $modx->stripAlias($name);
		$extension = pathinfo($name, PATHINFO_EXTENSION);
		$userfile['name'] = $name;
		$userfile['type'] = $_FILES['userfiles']['type'][$i];
		$userfile['tmp_name'] = $_FILES['userfiles']['tmp_name'][$i];
		$userfile['error'] = $_FILES['userfiles']['error'][$i];
		$userfile['size'] = $_FILES['userfiles']['size'][$i];
		$userfile['extension'] = $extension;
		$path = $startpath . '/' . $userfile['name'];
		$userfile['startpath'] = $startpath;
		$userfile['path'] = $path;
		$userfile['permissions'] = $new_file_permissions;
		$userfilename = $userfile['tmp_name'];
		if(is_uploaded_file($userfilename)):
			if(in_array($extension, $exts)):
				if (@move_uploaded_file($userfile['tmp_name'], $userfile['path'])):
					if (strtoupper(substr(PHP_OS, 0, 3)) != 'WIN'):
						@chmod($userfile['path'], $new_file_permissions);
					endif;
					$msg = '<dl class="dl-horizontal">';
					$msg .= '<dt>' . $_lang["sch_file_upload"] . '</dt>';
					$msg .= '<dd>' . $userfile['name'] . '</dd>';
					$msg .= '</dl>';
					$all['success'] .= $msg;
					$modx->invokeEvent('OnFileManagerUpload', array(
						'filepath' => $userfile['startpath'],
						'filename' => $userfile['name']
					));
				else:
					$msg = '<dl class="dl-horizontal">';
					$msg .= '<dt>' . $_lang["sch_file_upload_error"] . '</dt>';
					$msg .= '<dd>' . $userfile['name'] . '</dd>';
					$msg .= '</dl>';
					$all['error'] .= $msg;
				endif;
			else:
				$msg = '<dl class="dl-horizontal">';
				$msg .= '<dt>' . $_lang["sch_file_upload_error"] . '</dt>';
				$msg .= '<dd>' . $userfile['name'] . '</dd>';
				$msg .= '</dl>';
				$all['error'] .= $msg;
			endif;
		else:
			$msg = '<dl class="dl-horizontal">';
			$msg .= '<dt>' . $_lang["sch_file_upload_error"] . '</dt>';
			$msg .= '<dd>' . $userfile['name'] . '</dd>';
			$msg .= '</dl>';
			$all['error'] .= $msg;
		endif;
	endforeach;
	return $all;
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



ob_start();

// Files upload
if($_REQUEST['mode'] == 'upload'):
	if(checkedPath($path, $access_path)):
		$print = $path;
		$all = fileupload();
		if($all['error']):
			$_SESSION['SystemAlertMsgQueque'][] = $all['error'];
		endif;
	endif;
endif;

if($_REQUEST['mode'] == 'rename'):
	if($_REQUEST['newfile'] && $_REQUEST['file']):
		$all = renameFile($_REQUEST['newfile'], $_REQUEST['file']);
		if($all['error']):
			$_SESSION['SystemAlertMsgQueque'][] = $all['error'];
		endif;
	endif;
endif;

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

include_once MODX_MANAGER_PATH . 'includes/header.inc.php';
include_once SCHOOL_FOLDERS_BASE_PATH . 'template.php';
include_once MODX_MANAGER_PATH . 'includes/footer.inc.php';
echo ob_get_clean();
