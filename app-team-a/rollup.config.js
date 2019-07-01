import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "dist/App.js",
  output: {
    file: "dist/bundle.js",
    format: "esm"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    resolve({ browser: true, jsnext: true }),
    commonjs({ include: ["node_modules/**"] })
  ]
};
