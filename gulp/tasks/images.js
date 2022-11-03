import imagemin from "gulp-imagemin";

export const images = () => {
  return app.gulp
    .src(app.path.src.images)
    .pipe(app.plugins.newer(app.path.build.images))
    .pipe(app.plugins.if(app.isBuild, imagemin()))
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browserSync.stream());
};
