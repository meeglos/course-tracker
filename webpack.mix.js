let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .styles([
        'node_modules/fontawesome/css/font-awesome.css',
        'node_modules/simple-line-icons/css/simple-line-icons.css'
    ], 'public/css/fonts.css')
    .copy('node_modules/simple-line-icons/fonts', 'public/fonts')
    .copy('node_modules/fontawesome/fonts', 'public/fonts')
;
