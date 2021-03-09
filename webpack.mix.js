let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js')
    .sass('src/scss/main.scss', 'css')
    .setPublicPath('dist');
mix.copy('src/index.html', 'dist/index.html');