<?php
if (!defined('MODX_BASE_PATH')) {
	http_response_code(403);
	die('For'); 
}
$e = &$modx->Event;
$help_content = '';
$ttl = "";
$chelp = "";
$id_help = isset($id_help) ? intval($id_help) : 1;
switch($e->name){
	case 'OnManagerWelcomeHome': 
		$tbl_site_content = $modx->getFullTableName('site_content');
		$rs = $modx->db->select('content', $tbl_site_content, "id='{$id_help}'");
		$chelp = $modx->db->getValue($rs);
		$rs = $modx->db->select('pagetitle', $tbl_site_content, "id='{$id_help}'");
		$ttl = $modx->db->getValue($rs);
		$help_content .=  '
<div id="help_content">
	<div id="frame_help">
		' . $chelp . '
	</div>
</div>';
		$menuindex = isset($menuindex) ? (int)$menuindex : 10;
		$widgets['help-widget'] = array(
			'menuindex' => $menuindex,
			'id' => 'help-widget',
			'cols' => 'col-sm-12',
			'icon' => 'fa-question-circle',
			'title' => $ttl,
			'body' => '<div class="card-body">'.$help_content.'<script src="/assets/templates/projectsoft/js/emoji.min.js?' . filemtime(MODX_BASE_PATH . 'assets/templates/projectsoft/js/emoji.min.js') . '"></script></div>'
		);
		$modx->event->output(serialize($widgets));
		break;
}