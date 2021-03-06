var gulp        = require('gulp');
var browserSync = require('browser-sync');
var markdown    = require('gulp-markdown');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var jade        = require('gulp-pug');


var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};



/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: true
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        //.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});


/**
 * Watch markdown for changes and recompile
 */

 gulp.task('markdown', function () {
    return gulp.src('assets/markdown/*.md')
        .pipe(markdown())
        .pipe(gulp.dest('_includes'))
});

/**
 * Watch Jade/Pug for changes and recompile
 */

 gulp.task('jade', ['markdown'], function(){
    return gulp.src(['assets/jade/*.jade', 'assets/jade/privacy/*.jade', 'assets/jade/blog/*.jade' ])
    .pipe(jade({
        pretty : '\t'
    }))
    .pipe(gulp.dest('_includes'));
 });

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*','_data/*','assets/js/*','_posts/*.md','_posts/*.html'], ['jekyll-rebuild']);
    gulp.watch(['assets/jade/**', 'assets/markdown/**'], ['jade']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
