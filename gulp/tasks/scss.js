import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
  return (
    app.gulp
      .src(app.path.src.scss, { sourcemap: app.isDev })
      .pipe(
        sass({
          outputStyle: "expanded",
        })
      )
      .pipe(app.plugins.replace(/@img\//g, "../img/"))
      .pipe(app.plugins.replace(/@fonts\//g, "../files/fonts/"))
      .pipe(groupCssMediaQueries())
      .pipe(
        app.plugins.if(
          app.isBuild,
          autoprefixer({
            grid: false,
            overrideBrowserslist: ["last 3 versions"],
            cascade: true,
          })
        )
      )

      //create uncompressed css copy
      // .pipe(app.gulp.dest(app.path.build.css))

      //create compressed css
      .pipe(app.plugins.if(app.isBuild, cleanCss()))
      .pipe(
        app.plugins.rename({
          extname: ".min.css",
        })
      )
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browserSync.stream())
  );
};
