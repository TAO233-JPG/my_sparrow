/**
 * 创建svg元素
 * @param {string} type
 * @returns {SVGAElement}
 */
export function createSVGElement(type) {
  return document.createElementNS("http://www.w3.org/2000/svg", type);
}

/**
 * 挂载子节点
 * @param {Node} parent
 * @param {Node} child
 */
export function mount(parent, child) {
  if (parent) {
    parent.appendChild(child);
  }
}
