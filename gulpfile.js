var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notify = require('gulp-notify');

var path = {
    HTML:'example/index.html',
    OUT: 'out'
};

gulp.task('default', ['copy','browserify']);

gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.OUT));
});

gulp.task('browserify', function() {
    gulp.watch(path.HTML,['copy']);
    var bundler = browserify({
        entries: ['example/js/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
        .on('update', function () { // When any files update
            var updateStart = Date.now();
            console.log('Updating!');
            watcher.bundle() // Create new bundle that uses the cache for high performance
                .on('error', function (error) {
                    return notify().write(error);
                })
                .pipe(source('main.js'))
                // This is where you add uglifying etc.
                .pipe(gulp.dest(path.OUT));
            console.log('Updated!', (Date.now() - updateStart) + 'ms');
        })
        .bundle() // Create the initial bundle when starting the task
        .on('error', function (error) {
            return notify().write(error);
        })
        .pipe(source('main.js'))
        .pipe(gulp.dest(path.OUT));
});