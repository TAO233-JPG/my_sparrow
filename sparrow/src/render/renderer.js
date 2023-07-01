import { createContext } from "./context";

/**
 * 创建渲染器
 * @param {number} width
 * @param {number} height
 * @return {}
 */
export default function createRenderer(width, height) {
  const context = createContext(width, height);

  return {
    node: () => context.node,
    group: () => context.group,
  };
}
