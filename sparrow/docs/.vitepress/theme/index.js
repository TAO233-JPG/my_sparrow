import Theme from "vitepress/theme";

import * as sp from "../../../src/index"

export default {
  ...Theme,
  enhanceApp(config) {
    if (!import.meta.env.SSR) {
        window && (window.sp = sp);
    }
  },
};
