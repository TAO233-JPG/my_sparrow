/**
 *
 * @param {*} channals 通道
 * @param {*} render 渲染函数
 */
export function createGemetry(channels, render) {
  // 创建一个几何图形我们需要定义其通道和渲染函数
  // 并且在渲染之前检查一下是否提供了需要的数据和正确的比例尺。
  const geometry = (renderer, I, scales, values, styles, coordinate) => {
    for (const [key, { optional, scale }] of Object.entries(channels)) {
      // 只有必选的通道才会被检查
      if (!optional) {
        // 如果没有提供对应的值就抛出异常
        if (!values[key]) throw new Error(`Missing Channel: ${key}`);
        // 目前只用判断一下 band 比例尺
        if (scale === "band" && (!scales[key] || !scales[key].bandWidth)) {
          throw new Error(`${key} channel needs band scale.`);
        }
      }
    }
    return render(renderer, I, scales, values, styles, coordinate);
  };
  // 将需要的通道返回
  geometry.channels = () => channels;

  return geometry;
}
