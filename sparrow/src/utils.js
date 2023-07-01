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
/**
 * 绑定attribute
 * @param {Element} el
 * @param {object} attributes
 */
export function applyAttributes(el, attributes) {
  for (const [key, val] of Object.entries(attributes)) {
    const k = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    el.setAttribute(k, val);
  }
}

export function applyTransform(element, transform) {
  const oldTransform = element.getAttribute("transform") || "";
  // 将新的变换指定到后面的变换后，这里需要字符串拼接
  const prefix = oldTransform ? `${oldTransform} ` : "";
  element.setAttribute("transform", `${prefix}${transform}`);
}
