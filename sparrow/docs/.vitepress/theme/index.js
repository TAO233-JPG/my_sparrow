import Theme from "vitepress/theme";

import Demo from "./demo.vue";
import * as sp from "../../../src/index";

export default {
  ...Theme,
  enhanceApp(config) {
    config.app.provide("sp", sp)
    config.app.component("VDemo", Demo);
    if (!import.meta.env.SSR) {
      window && (window.sp = sp);
    }
  },
};
