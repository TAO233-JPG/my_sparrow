import { defineConfig } from "vitepress";
import { PluginDemo } from "./plugins";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my_sparrow/',
  title: "VChart",
  description: "一个基于vue3+typescript的uni-app路由库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "examples/charts/barChart" },
    ],

    sidebar: [
      {
        text: "图表",
        collapsed: true,
        items: [
          { text: "条形图", link: "/examples/charts/barChart" },
          { text: "玫瑰图", link: "/examples/charts/roseChart" },
          { text: "折线图", link: "/examples/charts/lineChart" },
          { text: "饼图", link: "/examples/charts/fanChart" },
          { text: "面积图", link: "/examples/charts/areaChart" },
        ],
      },
      {
        text: "辅助组件",
        link: "/examples/guides/",
      },
      {
        text: "视图",
        link: "/examples/views/",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/TAO233-JPG/my_sparrow" },
    ],
  },

  markdown: {
    config: (md) => {
      md.use(PluginDemo);
    },
  },
});
