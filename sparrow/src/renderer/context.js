import { createSVGElement, mount } from "../utils";

/**
 *  创建上下文
 * @param {number} width
 * @param {number} height
 * @returns {{node:SVGAElement, group:SVGAElement}}
 */
export function createContext(width, height) {
  // 1. 创建画布节点 svg 方便使用者将其挂载到 DOM 需要的位置
  const svg = createSVGElement("svg");
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

  // 2. 创建挂载节点 g，
  // 是当前可以挂载新元素的节点，
  // 可以通过更新它来到达管理坐标系变换的功能。
  const g = createSVGElement("g");
  mount(svg, g);

  return {
    node: svg,
    group: g,
  };
}
