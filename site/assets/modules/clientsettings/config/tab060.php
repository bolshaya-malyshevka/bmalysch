<?php
return array (
	'caption' => 'SEO && API',
	'introtext' => '<b style="color: red">Настройки для SEO</b>',
	'settings' => array (
		'yandex_verification' => array(
			'caption' => 'Подтверждение прав',
			'type' => 'text',
			'note' => 'Подтверждение прав на ' . $_SERVER['HTTP_X_FORWARDED_PROTO'] . '://' . $_SERVER['HTTP_HOST'] . '/',
			'default_text' => '',
		),
		'yandex_metrika' => array(
			'caption' => 'ID счётчика Yandex',
			'type' => 'text',
			'note' => '',
			'default_text' => '',
		)
	),
);