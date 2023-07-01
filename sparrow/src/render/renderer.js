import { createContext } from "./context";
import { line, rect, circle, text, path, ring } from "./shape";

/**
 * 创建渲染器
 * @param {number} width
 * @param {number} height
 * @return {}
 */
export default function createRenderer(width, height) {
  const context = createContext(width, height);

  return {
    line: (attributes) => line(context, attributes),
    rect: (attributes) => rect(context, attributes),
    circle: (attributes) => circle(context, attributes),
    text: (attributes) => text(context, attributes),
    path: (attributes) => path(context, attributes),
    ring: (attributes) => ring(context, attributes), // 绘制圆环
    // restore: () => restore(context),
    // save: () => save(context),
    // scale: (...args) => scale(context, ...args),
    // rotate: (...args) => rotate(context, ...args),
    // translate: (...args) => translate(context, ...args),
    node: () => context.node,
    group: () => context.group,
  };
}
