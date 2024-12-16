module.exports = function(grunt) {
	require('dotenv').config();
	const DEBUG = parseInt(process.env.DEBUG) || false;
	var fs = require('fs'),
		chalk = require('chalk'),
		PACK = grunt.file.readJSON('package.json'),
		uniqid = function () {
			//if(DEBUG){
				var md5 = require('md5');
				result = md5((new Date()).getTime()).toString();
				grunt.verbose.writeln("Generate hash: " + chalk.cyan(result) + " >>> OK");
				return result;
			//}
			//return `v${PACK.version}`;
		};
	
	String.prototype.hashCode = function() {
		var hash = 0, i, chr;
		if (this.length === 0) return hash;
		for (i = 0; i < this.length; i++) {
			chr   = this.charCodeAt(i);
			hash  = ((hash << 5) - hash) + chr;
			hash |= 0; // Convert to 32bit integer
		}
		return hash;
	};
	var gc = {
		fontvers: `${PACK.version}`,
		assets: "assets/templates/projectsoft",
		gosave: "site/assets/templates/projectsoft",
		default: [
			"clean:all",
			"webfont",
			//"ttf2eot",
			"ttf2woff",
			"ttf2woff2",
			"imagemin",
			"tinyimg",
			"concat",
			"uglify",
			"less",
			"autoprefixer",
			"group_css_media_queries",
			"replace",
			"cssmin",
			"pug",
			"copy",
			"lineending"
		],
		speed: [
			//"clean:all",
			"concat",
			"uglify",
			"less",
			"autoprefixer",
			"group_css_media_queries",
			"replace",
			"cssmin",
			"copy",
			"pug",
			"lineending"
		]
	};
	NpmImportPlugin = require("less-plugin-npm-import");
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	var optionsPug = {
			doctype: 'html',
			client: false,
			pretty: "",//'\t',
			separator:  "",//'\n',
			//pretty: '\t',
			//separator:  '\n',
			data: function(dest, src) {
				return {
					"base": "[(site_url)]",
					"tem_path" : "/assets/templates/projectsoft",
					"img_path" : "assets/templates/projectsoft/images/",
					"site_name": "[(site_name)]",
					"hash": uniqid(),
					"hash_css": uniqid(),
					"hash_js": uniqid(),
					"hash_appjs": uniqid(),
				}
			}
		};
	grunt.initConfig({
		globalConfig : gc,
		pkg : PACK,
		clean: {
			options: {
				force: true
			},
			all: [
				'test/',
				'tests/'
			]
		},
		concat: {
			options: {
				separator: "\n",
			},
			appjs: {
				src: [
					'bower_components/jquery/dist/jquery.js',

					//"bower_components/fancybox/src/js/core.js",

					//"bower_components/fancybox/src/js/media.js",

					//'src/js/media.js',

					//"bower_components/fancybox/src/js/guestures.js",
					//"bower_components/fancybox/src/js/slideshow.js",
					//"bower_components/fancybox/src/js/fullscreen.js",
					//"bower_components/fancybox/src/js/thumbs.js",
					//"bower_components/fancybox/src/js/hash.js",
					//"bower_components/fancybox/src/js/wheel.js",

					'bower_components/slick-carousel/slick/slick.js',
					'bower_components/js-cookie/src/js.cookie.js',
					'bower_components/jquery.cookie/jquery.cookie.js',
					'bower_components/inputmask/dist/jquery.inputmask.js'
				],
				dest: '<%= globalConfig.gosave %>/js/appjs.js'
			},
			main: {
				src: [
					//'src/js/jquery.btn.js',
					'bower_components/button-visually-impaired-javascript/dist/js/bvi.js',
					'src/js/main.js'
				],
				dest: '<%= globalConfig.gosave %>/js/main.js'
			}
		},
		uglify: {
			options: {
				sourceMap: false,
				compress: {
					drop_console: false
	  			}
			},
			app: {
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'<%= globalConfig.gosave %>/js/appjs.js',
							'<%= globalConfig.gosave %>/js/main.js'
						],
						dest: '<%= globalConfig.gosave %>/js',
						filter: 'isFile',
						rename: function (dst, src) {
							return dst + '/' + src.replace('.js', '.min.js');
						}
					}
				]
			}
		},
		webfont: {
			icons: {
				src: 'src/glyphs/*.svg',
				dest: 'src/fonts/',
				options: {
					hashes: true,
					relativeFontPath: '@{fontpath}',
					destLess: 'src/less/fonts',
					font: 'iconssite',
					types: 'ttf',
					fontFamilyName: 'IconsSite',
					stylesheets: ['less'],
					syntax: 'bootstrap',
					engine: 'node',
					autoHint: false,
					execMaxBuffer: 1024 * 200,
					htmlDemo: false,
					version: gc.fontVers,
					normalize: true,
					startCodepoint: 0xE900,
					iconsStyles: false,
					templateOptions: {
						fontfaceStyles: false,
						baseClass: '',
						classPrefix: 'icon-'
					},
					embed: false,
					template: 'src/font-build.template'
				}
			},
		},
		less: {
			css: {
				options : {
					compress: false,
					ieCompat: false,
					plugins: [
						new NpmImportPlugin({prefix: '~'})
					],
					modifyVars: {
						'hashes': '\'' + uniqid() + '\'',
						'fontpath': '/<%= globalConfig.assets %>/fonts',
						'imgpath': '/<%= globalConfig.assets %>/images',
						'white': '#ffffff',
						'bgcolor': '#1e73be',
						'padding': '15px',
					}
				},
				files : {
					'test/css/main.css' : [
						'src/less/main.less'
					],
					'test/css/tinymce.css' : [
						'src/less/style.less'
					],
					'<%= globalConfig.gosave %>/css/bvi.css': [
						'src/less/bvi/scss/bvi.less'
					],
				}
			},
		},
		autoprefixer:{
			options: {
				browsers: [
					"last 4 version"
				],
				cascade: true
			},
			css: {
				files: {
					'test/css/prefix.main.css' : [
						'test/css/main.css'
					],
					'test/css/prefix.tinymce.css' : [
						'test/css/tinymce.css'
					]
				}
			},
		},
		group_css_media_queries: {
			group: {
				files: {
					'test/css/media/main.css': ['test/css/prefix.main.css'],
					'test/css/media/tinymce.css': ['test/css/prefix.tinymce.css']
				}
			},
		},
		replace: {
			css: {
				options: {
					patterns: [
						{
							match: /\/\*.+?\*\//gs,
							replacement: ''
						},
						{
							match: /\r?\n\s+\r?\n/g,
							replacement: '\n'
						}
					]
				},
				files: [
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/main.css'
						],
						dest: 'test/css/replace/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/main.css'
						],
						dest: '<%= globalConfig.gosave %>/css/',
						filter: 'isFile'
					},
					/* TinyMCE */
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/tinymce.css'
						],
						dest: 'test/css/replace/',
						filter: 'isFile'
					},
					{
						expand: true,
						flatten : true,
						src: [
							'test/css/media/tinymce.css'
						],
						dest: '<%= globalConfig.gosave %>/css/',
						filter: 'isFile'
					}
				]
			},
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			minify: {
				files: {
					'<%= globalConfig.gosave %>/css/main.min.css' : ['test/css/replace/main.css'],
					'<%= globalConfig.gosave %>/css/tinymce.min.css' : ['test/css/replace/tinymce.css'],
					'<%= globalConfig.gosave %>/css/bvi.min.css' : ['<%= globalConfig.gosave %>/css/bvi.css'],
				}
			},
		},
		lineending: {
			dist: {
				options: {
					eol: 'lf'
				},
				files: [
					{
						expand: true,
						cwd: '<%= globalConfig.gosave %>/css',
						src: ['**/*'],
						dest: '<%= globalConfig.gosave %>/css/'
					}
				]
			}
		},
		imagemin: {
			options: {
				optimizationLevel: 3,
				svgoPlugins: [
					{
						removeViewBox: false
					}
				]
			},
			base: {
				files: [
					{
						expand: true,
						cwd: 'src/images', 
						src: ['**/*.{png,jpg,jpeg}'],
						dest: 'test/images/',
					},
					{
						expand: true,
						flatten : true,
						src: [
							'src/images/*.{gif,svg}'
						],
						dest: '<%= globalConfig.gosave %>/images/',
						filter: 'isFile'
					}
				]
			}
		},
		tinyimg: {
			dynamic: {
				files: [
					{
						expand: true,
						cwd: 'test/images', 
						src: ['**/*.{png,jpg,jpeg}'],
						dest: '<%= globalConfig.gosave %>/images/'
					}
				]
			}
		},
		ttf2eot: {
			default: {
				src: 'src/fonts/*.ttf',
				dest: '<%= globalConfig.gosave %>/fonts/'
			}
		},
		ttf2woff: {
			default: {
				src: 'src/fonts/*.ttf',
				dest: '<%= globalConfig.gosave %>/fonts/'
			}
		},
		ttf2woff2: {
			default: {
				src: 'src/fonts/*.ttf',
				dest: '<%= globalConfig.gosave %>/fonts/'
			}
		},
		copy: {
			favicons: {
				expand: true,
				cwd: 'src/favicons',
				src: [
					'**'
				],
				dest: __dirname + "/site/",
			},
			fonts: {
				expand: true,
				cwd: 'src/fonts',
				src: [
					'**'
				],
				dest: '<%= globalConfig.gosave %>/fonts/',
			},
			js: {
				expand: true,
				cwd: 'test/js',
				src: [
					'**'
				],
				dest: '<%= globalConfig.gosave %>/js/',
			},
			form: {
				expand: true,
				cwd: 'src/json',
				src: [
					'**'
				],
				dest: __dirname + "/site/comon/json/",
			},
			images: {
				expand: true,
				cwd: 'src/images',
				src: [
					'*.gif'
				],
				dest: '<%= globalConfig.gosave %>/images/',
			},
		},
		pug: {
			serv: {
				options: optionsPug,
				files: [
					{
						expand: true,
						cwd: __dirname + '/src/pug/',
						src: [ '*.pug' ],
						dest: __dirname + '/' + '<%= globalConfig.gosave %>/',
						ext: '.html'
					},
				]
			},
			tpl: {
				options: optionsPug,
				files: [
					{
						expand: true,
						dest: __dirname + '/<%= globalConfig.gosave %>/tpl/',
						cwd:  __dirname + '/src/pug/tpl/',
						src: '*.pug',
						ext: '.html'
					}
				]
			},
			sitemap: {
				options: {
					doctype: 'html',
					client: false,
					pretty: '\t',
					separator:  '\n',
					data: function(dest, src) {
						return {
							"base": "[(site_url)]",
							"tem_path" : "/assets/templates/projectsoft",
							"img_path" : "assets/templates/projectsoft/images/",
							"site_name": "[(site_name)]",
							"hash": uniqid(),
							"hash_css": uniqid(),
							"hash_js": uniqid(),
							"hash_appjs": uniqid(),
						}
					}
				},
				files: [
					{
						expand: true,
						dest: __dirname + '/<%= globalConfig.gosave %>/sitemap/',
						cwd:  __dirname + '/src/pug/sitemap/',
						src: 'sitemap.pug',
						ext: '.html'
					}
				]
			},
			stylesheet: {
				options: {
					doctype: 'XML',
					client: false,
					pretty: '\t',
					separator:  '\n',
					data: function(dest, src) {
						return {
							"base": "[(site_url)]",
							"tem_path" : "/assets/templates/projectsoft",
							"img_path" : "assets/templates/projectsoft/images/",
							"site_name": "[(site_name)]",
							"hash": uniqid(),
							"hash_css": uniqid(),
							"hash_js": uniqid(),
							"hash_appjs": uniqid(),
						}
					}
				},
				files: [
					{
						expand: true,
						dest: __dirname + '/<%= globalConfig.gosave %>/sitemap/',
						cwd:  __dirname + '/src/pug/sitemap/',
						src: 'stylesheet.pug',
						ext: '.html'
					}
				]
			},
		},
	});
	grunt.registerTask('default',	gc.default);
	grunt.registerTask('speed',	gc.speed);
};
