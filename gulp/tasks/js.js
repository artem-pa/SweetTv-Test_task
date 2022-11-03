import babel from "gulp-babel";
import uglify from "gulp-uglify";

export const js = () => {
  return (
    app.gulp
      .src(app.path.src.js, { sourcemap: app.isDev })
      .pipe(
        app.plugins.if(
          app.isBuild,
          babel({
            presets: ["@babel/preset-env"],
          })
        )
      )

      //create uncompressed js copy
      // .pipe(app.plugins.if(app.isDev, app.gulp.dest(app.path.build.js)))

      //create compressed js
      .pipe(app.plugins.if(app.isBuild, uglify()))
      .pipe(
        app.plugins.rename({
          extname: ".min.js",
        })
      )
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browserSync.stream())
  );
};
