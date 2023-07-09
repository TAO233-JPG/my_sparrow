import { circle } from "./shape";
import { createChannels, createChannel } from "./channel";
import { channelStyles } from "./style";

export function point(renderer, I, scales, channels, directStyles, coordinate) {
  const defaults = {
    r: 3,
    fill: "none",
  };
  const { x: X, y: Y, r: R = [] } = channels;

  // 根据属于获取每条数据各个通道的值
  return Array.from(I, (i) => {
    const { r: dr, ...restDefaults } = defaults;
    const r = R[i] || dr;
    return circle(renderer, coordinate, {
      ...restDefaults,
      // 元素的样式由直接指定的样式和通过通道指定的样式决定
      // 经过通道指定的样式就是和数据相关的样式
      // 后的优先级更高
      ...directStyles,
      ...channelStyles(i, channels),
      // 圆心的位置
      cx: X[i],
      cy: Y[i],
      r,
    });
  });
}

point.channels = () =>
  createChannels({
    r: createChannel({ name: "r" }),
  });
