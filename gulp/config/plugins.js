import replace from "gulp-replace";
import rename from "gulp-rename";
import browserSync from "browser-sync";
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';

export const plugins = {
  replace: replace,
  browserSync: browserSync,
  rename: rename,
  newer: newer,
  if: ifPlugin,
};
