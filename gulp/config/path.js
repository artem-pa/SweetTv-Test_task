import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    files: `${buildFolder}/files/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/img/`
  },
  src: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
  },
  watch: {
    files: `${srcFolder}/files/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/**/*.js`,
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
  },
  clean: buildFolder,
  srcFolder: srcFolder,
  buildFolder: buildFolder,
  rootFolder: rootFolder,
};
