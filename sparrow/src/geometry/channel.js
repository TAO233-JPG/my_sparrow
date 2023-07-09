/**
 * 创建一个通道对象
 * @param {object} options
 * @param {string} options.name
 * @param {boolean} options.optional -- values是否需要该属性的对应值
 * @returns 通道对象
 */
export function createChannel({ name, optional = true, ...rest }) {
  return {
    name,
    optional,
    ...rest,
  };
}

/**
 * 创建通道对象
 * @param {object} options
 * @returns
 */
export function createChannels(options = {}) {
  return {
    x: createChannel({ name: "x", optional: false }), // x 坐标
    y: createChannel({ name: "y", optional: false }), // y 坐标
    stroke: createChannel({ name: "stroke" }), // 边框颜色
    fill: createChannel({ name: "fill" }), // 填充色
    ...options,
  };
}
