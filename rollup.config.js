
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss"
import autoprefixer from "autoprefixer"
import tailwind from "tailwindcss"
import purgecss from '@fullhuman/postcss-purgecss';

import packageJson from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      format: "cjs",
      file: packageJson.main,
      sourcemap: true
    },
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true
    }
  ],
  plugins: [ vue({ preprocessStyles: true }), postcss({
    extract: false,
    plugins: [
        autoprefixer(),
        tailwind(),
        purgecss({
            content: ['./static/index.html', './src/**/*.vue'],
            defaultExtractor: content => content.match(/[\w-./:]+(?<!:)/g) || []
        }),
    ]
  }), commonjs()]
};



