import { line as pathLine } from "./d";

// 绘制不同坐标系下面的圆
// 绘制圆的函数和渲染器里面绘制圆的区别在于
// 这里需要考虑坐标系
export function circle(renderer, coordinate, { cx, cy, r, ...styles }) {
  // 对圆心进行坐标系变换
  const [px, py] = coordinate([cx, cy]);
  return renderer.circle({ cx: px, cy: py, r, ...styles });
}

export function text(renderer, coordinate, { x, y, rotate, text, ...styles }) {
  const [px, py] = coordinate([x, y]);
  renderer.save();
  renderer.translate(px, py);
  renderer.rotate(rotate);
  const textElement = renderer.text({ text, x: 0, y: 0, ...styles });
  renderer.restore();
  return textElement;
}

export function link(renderer, coordinate, { x1, y1, x2, y2, ...styles }) {
  [x1, y1] = coordinate([x1, y1]);
  [x2, y2] = coordinate([x2, y2]);
  return renderer.line({ x1, x2, y1, y2, ...styles });
}

export function line(renderer, coordinate, { X, Y, I: I0, ...styles }) {
  // 在极坐标系下这条线需要闭合，所以需要将第一个点加入到最后。
  const I = coordinate.isPolar() ? [...I0, I0[0]] : I0;
  const points = I.map((i) => coordinate([X[i], Y[i]]));
  const d = pathLine(points);
  return renderer.path({ d, ...styles });
}
