// 分面是可视化中一个常用的手段，
// 主要用于对数据进行分组，不同组的数据在不同的视图中展示。
import { group } from "../utils/helper";

export function computeFacetViews(
  box,
  {
    data,
    encodings = {},
    padding = 0,
    paddingLeft = 45,
    paddingRight = 45,
    paddingBottom = 45,
    paddingTop = 45,
  }
) {
  const { x, y } = encodings;
  const cols = x ? Array.from(group(data, (d) => d[x]).keys()) : [undefined];
  const rows = y ? Array.from(group(data, (d) => d[y]).keys()) : [undefined];
  const n = cols.length;
  const m = rows.length;

  const width = box.width - paddingLeft - paddingRight;
  const height = box.height - paddingTop - paddingBottom;
  const boxWidth = (width - padding * (n - 1)) / n;
  const boxHeight = (height - padding * (m - 1)) / m;

  const views = [];
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      const transform = (data) => {
        const inRow = (d) => d[x] === cols[i] || cols[i] === undefined;
        const inCol = (d) => d[y] === rows[j] || rows[j] === undefined;
        return data.filter((d) => inRow(d) && inCol(d));
      };
      views.push({
        x: paddingLeft + box.x + padding * i + i * boxWidth,
        y: paddingTop + box.y + padding * j + j * boxHeight,
        width: boxWidth,
        height: boxHeight,
        transform, // 指定过滤函数
      });
    }
  }
  return views;
}
