import { identity, map, assignDefined } from "../utils/helper.js";
import { bfs } from "../utils/tree.js";
import createRenderer from "../renderer";
import { createViews } from "../view/view.js";
import { createCoordinate } from "../coordinate";
import { create } from "./create";
import { inferScales, applyScales } from "./scale";
import { initialize } from "./geometry";
import { inferGuides } from "./guide";
/*
export function plot({ data, transforms = [], encodings }) {
  const transformedData = compose(...transforms)(data);
  const len = transformedData.length;
  const value = {
    x: new Array(len).fill(0),
    y: new Array(len).fill(0),
  };
  for (const [k, v] of Object.entries(encodings)) {
    const g = group(transformedData, (item) => item[v]);
    value[k] = g.values();
  }
}
 */

export function plot(root) {
  // 创建渲染引擎
  const { width = 640, height = 480, renderer: plugin } = root;
  const renderer = createRenderer(width, height, plugin);

  // 将配置从容器节点流向视图节点, 将容器的节点同步给视图节点（子节点）
  // 即将父节点的options，同步给子节点的options
  flow(root);

  // 将视图树转换成视图树组
  const views = createViews(root);
  for (const [view, nodes] of views) {
    const { transform = identity, ...dimensions } = view;
    const geometries = [];
    const scales = {};
    const guides = {};
    let coordinates = [];

    const chartNodes = nodes.filter(({ type }) => isChartNode(type));

    // 合并同一区域的所有视图配置
    for (const options of chartNodes) {
      const {
        scales: s = {},
        guides: g = {},
        coordinates: c = [],
        transforms = [],
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingTop,
        ...geometry
      } = options;
      assignDefined(scales, s); // 合并 scales 配置
      assignDefined(guides, g); // 合并 guides 配置
      // 合并 padding 等配置
      assignDefined(dimensions, {
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingTop,
      });
      if (c) coordinates = c; // 使用最后一个视图的坐标系
      // 收集该区域的所有几何图形
      geometries.push({ ...geometry, transforms: [transform, ...transforms] });
    }
    // 绘制每一个区域
    plotView({
      renderer,
      scales,
      guides,
      geometries,
      coordinates,
      ...dimensions,
    });
  }
  // 返回 SVG 元素
  return renderer.node();
}

function flow(root) {
  bfs(root, ({ type, children, ...options }) => {
    if (isChartNode(type)) return;
    if (!children || children.length === 0) return;
    const keyDescriptors = [
      "o:encodings",
      "o:scales",
      "o:guides",
      "o:styles",
      "a:coordinates",
      "a:statistics",
      "a:transforms",
      "a:data",
    ];
    for (const child of children) {
      for (const descriptor of keyDescriptors) {
        const [type, key] = descriptor.split(":");
        if (type === "o") {
          child[key] = { ...options[key], ...child[key] };
        } else {
          child[key] = child[key] || options[key];
        }
      }
    }
  });
}

function isChartNode(type) {
  switch (type) {
    case "layer":
    case "col":
    case "row":
      return false;
    default:
      return true;
  }
}
/**
 * 该函数是真正把图表渲染出来
 */
function plotView({
  renderer,
  scales: scalesOptions,
  guides: guidesOptions,
  coordinates: coordinateOptions,
  geometries: geometriesOptions,
  width,
  height,
  x,
  y,
  paddingLeft = 45,
  paddingRight = 45,
  paddingBottom = 45,
  paddingTop = 60,
}) {
  // 获得每个通道的值
  const geometries = geometriesOptions.map(initialize);
  const channels = geometries.map((d) => d.channels);

  // 推断 scales 和 guides
  const scaleDescriptors = inferScales(channels, scalesOptions);
  const guidesDescriptors = inferGuides(
    scaleDescriptors,
    { x, y, paddingLeft },
    guidesOptions
  );

  // 生成 scales 和 guides
  const scales = map(scaleDescriptors, create);
  const guides = map(guidesDescriptors, create);

  // 生成坐标系
  const transforms = inferCoordinates(coordinateOptions).map(create);
  const coordinate = createCoordinate({
    x: x + paddingLeft,
    y: y + paddingTop,
    width: width - paddingLeft - paddingRight,
    height: height - paddingTop - paddingBottom,
    transforms,
  });

  // 绘制辅助组件
  for (const [key, guide] of Object.entries(guides)) {
    const scale = scales[key];
    guide(renderer, scale, coordinate);
  }

  // 绘制几何元素
  for (const { index, geometry, channels, styles } of geometries) {
    const values = applyScales(channels, scales);
    geometry(renderer, index, scales, values, styles, coordinate);
  }
}

function inferCoordinates(coordinates) {
  return [...coordinates, { type: "cartesian" }];
}
