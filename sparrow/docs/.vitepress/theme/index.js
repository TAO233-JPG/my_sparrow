import Theme from "vitepress/theme";
const isServer = import.meta.env.PROD

export default {
  ...Theme,
  async enhanceApp(config) {
    if (!isServer) {
      await import("../../../src/index").then((module) => {
        window && (window.sp = module);
      });
    }
  },
};
