<?php
if(!defined('MODX_BASE_PATH')) die('What are you doing? Get out of here!');

$file = isset($file) ? $file : "";
$data = isset($data) ? $data : false;

$real_file = MODX_BASE_PATH . $file;
$out = "";

switch ($data) {
    case 'ext':
    case 'extension':
        $out = pathinfo($real_file, PATHINFO_EXTENSION);
        if($out != ""):
            $out = "." . $out;
        endif;
        break;
    case 'fancybox':
        $ext = strtolower(pathinfo($real_file, PATHINFO_EXTENSION));
        switch($ext) {
            case 'pdf':
            case 'xlsx':
                $file = preg_replace('/:/i', "", $file);
                $out = " data-fancybox=\"$file\"";
                break;
            default:
                break;
        }
    default:
        // code...
        break;
}

return $out;
