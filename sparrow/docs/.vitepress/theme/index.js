import Theme from "vitepress/theme";
import * as sp from "../../../src/index";

export default {
  ...Theme,

  enhanceApp(config) {
    window.sp = sp;
  },
};
