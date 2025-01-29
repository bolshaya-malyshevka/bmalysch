<?php
if( ! defined('IN_MANAGER_MODE') || IN_MANAGER_MODE !== true) {
	die("<b>INCLUDE_ORDERING_ERROR</b><br /><br />Please use the EVO Content Manager instead of accessing this file directly.");
}

$modPath = str_replace(MODX_BASE_PATH, '', dirname(__FILE__));
$upload_maxsize = $modx->config['upload_maxsize'];
?>
<div class="container">
	<h1 class="text-left"><i class="<?= $module["icon"];?>"></i><?= $title;?></h1>
	<div id="actions"><div class="btn-group"></div></div>
	<div id="ManageFiles">
<?php
	// Форма загрузки
	if (((@ini_get("file_uploads") == true) || get_cfg_var("file_uploads") == 1) && is_writable($startpath) && checkedPath($startpath, $access_path)):
?>
		<form name="upload" method="post" action="index.php?a=112&id=<?= $module['id']; ?>&mode=dir&path=<?= $startpath; ?>/" enctype="multipart/form-data">
			<input type="hidden" name="MAX_FILE_SIZE" value="<?= isset($upload_maxsize) ? $upload_maxsize : 3145728 ?>">
			<input type="hidden" name="mode" value="upload">
			<div id="uploader" class="text-right">
				<label class="btn btn-secondary text-uppercase">
					<i class="<?= $_style['files_save'];?>"></i>
					<input type="file" name="userfiles[]" onchange="uploadFiles(this);" multiple accept=".xlsx,.pdf">
					<?= $_lang["sch_files_upload_select"];?>
				</label>
				<p id="p_uploads"></p>
				<a class="btn btn-success text-uppercase" href="javascript:;" onclick="document.upload.submit()"><i class="<?= $_style['files_upload'];?>"></i> <?= $_lang['files_uploadfile']; ?></a>
			</div>
		</form>
<?php
	endif;
?>
		<div class="container breadcrumbs">
			<i class="fa fa-folder-open-o FilesTopFolder"></i>
			<a href="index.php?a=112&id=5&mode=dir&path=<?= urlencode(MODX_BASE_PATH); ?>">Top</a><?= $file_path ? "/<span>" . $file_path . "</span>" : "";?>
		</div>
		<div class="table-responsive">
			<table class="table data table-bordered">
				<thead>
					<tr>
						<th><?= $_lang['files_filename']; ?></th>
						<th style="width: 1%;" class="text-nowrap"><?= $_lang['files_modified']; ?></th>
						<th style="width: 1%;" class="text-nowrap"><?= $_lang['files_filesize']; ?></th>
						<th style="width: 1%;" class="text-nowrap"><?= $_lang['files_fileoptions'] ?></th>
					</tr>
				</thead>
				<tbody>
<?php
foreach($directorys as $dir):
	$f = MODX_BASE_PATH . $dir;
    $size = dir_size($f);
?>
					<tr>
						<td>
							<i class="<?= $_style['actions_folder'];?>"></i> <a href="index.php?a=112&id=5&mode=dir&path=<?= urlencode(MODX_BASE_PATH . $dir);?>/"><?= $dir;?></a>
						</td>
						<td></td>
						<td><?= $modx->nicesize($size);?></td>
						<td></td>
					</tr>
<?php
endforeach;
$stat = 0;
if($files):
	foreach($files as $file):
		$tmp_file = MODX_BASE_PATH . $file_path . "/" .  $file;
		$stat = 0;
		$ltime = 0;
		if(is_file($tmp_file)):
			$ltime = filemtime($tmp_file);
			$stat = filesize($tmp_file);
		endif;
?>
					<tr>
						<td class="text-nowrap"><?= $file;?></td>
						<td class="text-right text-nowrap"><?= $modx->toDateFormat($ltime);?></td>
						<td class="text-right text-nowrap"><?= $modx->nicesize($stat);?></td>
						<td class="actions text-right"><?php
						if(is_file(MODX_BASE_PATH . "viewer/jquery.min.js") && is_file(MODX_BASE_PATH . 'viewer/fancybox.min.js')): ?>
							<a data-file="/<?= $file_path . '/' . $file;?>" href="/<?= $file_path . '/' . $file;?>" title="<?= $_lang['files_viewfile'];?>"><i class="<?= $_style['files_view'];?>"></i></a><?php
						else: ?>
							<a href="/<?= $file_path . '/' . $file;?>" title="<?= $_lang['file_download_file'];?>" download><i class="<?= $_style['files_download'];?>"></i></a><?php
						endif;?>
							<a href="javascript:;" title="<?= $_lang['rename'];?>"><i class="<?= $_style['files_rename'];?>"></i></a>
							<a href="javascript:;" title="<?= $_lang['file_delete_file'];?>"><i class="<?= $_style['files_delete'];?>"></i></a>
						</td>
					</tr>
<?php
	endforeach;
else:
	if(checkedPath($startpath, $access_path)):
?>
					<tr>
						<td colspan="4">Нет файлов для вывода</td>
					</tr>
<?php
	endif;
endif;
?>
				</tbody>
			</table>
		</div>
		<pre><code><?= $upload_maxsize; ?></code></pre>
	</div>
</div>
<?php
// Данных файлов может и не быть
if(is_file(MODX_BASE_PATH . "viewer/app.min.css")):
?>
<link type="text/css" rel="stylesheet" href="/viewer/app.min.css"></link>
<?php
endif;

if(is_file(MODX_BASE_PATH . "viewer/jquery.min.js")):
?>
<script src="/viewer/jquery.min.js"></script>
<?php
endif;

if(is_file(MODX_BASE_PATH . 'viewer/fancybox.min.js')):
?>
<script src="/viewer/fancybox.min.js"></script>
<?php
endif;
$js = MODX_BASE_PATH . $modPath . '/js/main.js';
$ljs_time = filemtime($js);
?>
<script src="/<?= $modPath;?>/js/main.js?<?= $ljs_time;?>"></script>
<style type="text/css">
	pre code {
		display: block;
	}
	a i {
		pointer-events: none;
	}
	.fancybox-button {
		background: rgba(30, 30, 30, .6) !important;
		border: unset !important;
	}
	#uploader {
		margin-bottom: 1rem;
	}
	#p_uploads:empty ~ a.btn {
		display: none;
	}
	#ManageFiles .btn:not(:disabled) {
		cursor: pointer;
	}
	label.btn [type=file] {
		display: none;
	}
</style>