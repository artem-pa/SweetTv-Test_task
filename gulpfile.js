import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

import { copy } from "./gulp/tasks/copy.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
};

const watcher = () => {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.images, images);
};

const mainTasks = gulp.parallel(copy, html, scss, js, images);

export const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
export const build = gulp.series(reset, mainTasks);

gulp.task("default", dev);
