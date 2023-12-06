import { resolve } from "path";

export default {
  plugins: [],
  // 打包配置
  build: {
    sourcemap: true, // 输出.map文件
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      formats: ["es", "cjs"],
      fileName: "sparrow",
    },
  },
};
