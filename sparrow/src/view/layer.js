/**
 *
 * @param {*} box 区域大小
 * @param {*} node
 * @returns 把自己的区域大小返回作为孩子节点的区域
 */
export function computeLayerView(box, node) {
  const { children = [] } = node;
  return Array.from(children, () => ({ ...box }));
}
