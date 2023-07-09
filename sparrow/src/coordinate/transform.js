/**
 *
 * @param {string} type
 * @param {Function} transformer
 * @returns {transformer}
 */
function transform(type, transformer) {
  transformer.type = () => type;
  return transformer;
}

/**
 * 获取平移函数
 * @param {number} tx
 * @param {number} ty
 * @returns {Function}
 */
export function translate(tx = 0, ty = 0) {
  return transform("translate", ([px, py]) => [px + tx, py + ty]);
}
/**
 * 获取缩放函数
 * @param {number} sx
 * @param {number} sy
 * @returns {Function}
 */
export function scale(sx = 0, sy = 0) {
  return transform("scale", ([px, py]) => [px * sx, py * sy]);
}

/**
 * 获取反射函数
 * @returns {Function}
 */
export function reflect() {
  return transform("reflect", scale(-1, -1));
}
export function reflectX() {
  return transform("reflectX", scale(-1, 1));
}
export function reflectY() {
  return transform("reflectY", scale(1, -1));
}

/**
 * 获取转置函数
 * @returns {Function}
 */
export function transpose() {
  return transform("transpose", ([x, y]) => [y, x]);
}
/**
 * 获取极坐标转笛卡尔坐标函数
 * @returns
 */
export function polar() {
  return transform("polar", ([theta, radius]) => [
    Math.cos(theta) * radius,
    Math.sin(theta) * radius,
  ]);
}
