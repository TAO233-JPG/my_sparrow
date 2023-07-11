import { identity, lastOf } from "../utils/helper";

/**
 * 创建坐标轴
 * @param {*} components  不同坐标系对应的绘制组件
 * @returns
 */
export function createAxis(components) {
  return (
    renderer,
    scale,
    coordinate,
    {
      domain,
      label,
      tickCount = 5,
      formatter = identity,
      tickLength = 5,
      fontSize = 12,
      grid = false,
      tick = true,
    }
  ) => {
    // 获取 ticks 值
    const offset = scale.bandWitdh ? scale.bandWitdh() / 2 : 0;
    const values = scale.ticks ? scale.ticks(tickCount) : domain;
    // 处理一些绘制需要的属性
    const center = coordinate.center();
    // 转换成 00、01、11、10
    const type = `${+coordinate.isPolar()}${+coordinate.isTranspose()}`;
    const options = { tickLength, fontSize, center };

    // 根据当前坐标系种类选择对应的绘制格子、刻度和标签的方法
    const {
      grid: RenderGrid,
      ticks: RendererTicks,
      label: RendererLabel,
      start,
      end,
    } = components[type];

    // 计算得到刻度真正的坐标和展示的文本
    const ticks = values.map((d) => {
      const [x, y] = coordinate(start(d, scale, offset));
      const text = formatter(d);
      return { x, y, text };
    });

    const labelTick = (() => {
      if (!scale.bandWitdh) return lastOf(ticks);
      const value = lastOf(values);
      const [x, y] = coordinate(start(value, scale, offset * 2));
      return { x, y };
    })();

    // 按需绘制格子、刻度和标签
    if (grid && RenderGrid) RenderGrid(renderer, ticks, end(coordinate));
    if (tick && RendererTicks) {
      RendererTicks(renderer, ticks, options);
    }
    if (label && RendererLabel) {
      RendererLabel(renderer, label, labelTick, options);
    }
  };
}
