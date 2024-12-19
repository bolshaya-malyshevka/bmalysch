<?php
$settings['display'] = 'vertical';

$settings['fields'] = array(
	'title' => array(
		'caption' => 'Отображаемый текст (обязателен!!!)',
		'type' => 'text'
	),
	'link' => array(
		'caption' => 'Ссылка (обязателен!!!)',
		'type' => 'text'
	),
	'type' => array(
		'caption' => 'Иконнка',
		'type' => 'dropdown',
		'elements' => 'ВКонтакте==vk||Одноклассники==ok||RuTube==rutube||Сайт==home'
	)
);

$settings['templates'] = array(
	'outerTpl' => '<dt><p><strong>Мы в социальных сетях:</strong></p></dt><dd>[+wrapper+]</dd>',
	'rowTpl' => '<p><i class="icon-[+type+]"></i><a href="[+link+]" target="_blank">[+title+]</a></p>'
);

$settings['configuration'] = array(
	'enablePaste' => false,
	'csvseparator' => ';'
);