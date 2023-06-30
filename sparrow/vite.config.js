import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";

export default {
  plugins: [],
  // 打包配置
  build: {
    sourcemap: true, // 输出.map文件
    rollupOptions: {
      input: "src/index.js",
      output: [
        {
          dir: "dist/cjs/sparrow.js", // 对于 Nodejs，打包成 commonjs
          format: "cjs",
        },
        {
          dir: "dist/es/sparrow.js", // 对于浏览器，打包成 ES module
          format: "es",
        },
      ],
      plugins: [
        resolve(),
        babel(), // 使用 babel 插件
      ],
    },
  },
};
