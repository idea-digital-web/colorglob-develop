import gulp from 'gulp'

gulp.task('copy', () => {
  gulp.src(['./src/fonts/**'])
    .pipe(gulp.dest('./build/fonts'))
    .pipe(gulp.dest('./colorglob/fonts'))
  // gulp.src(['./src/styles/vendors/**'])
  //   .pipe(gulp.dest('./colorglob/styles/vendors'))
  // gulp.src(['./src/js/vendors/**'])
  //   .pipe(gulp.dest('./colorglob/js/vendors'))
  gulp.src([
    './src/*.txt',
    './src/sitemap.*',
    './src/*.php',
    './src/*.xml',
    './src/.htaccess'
  ]).pipe(gulp.dest('./colorglob'))
})
