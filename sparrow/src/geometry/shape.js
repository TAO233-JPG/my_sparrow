import { line as pathLine, area as pathArea, sector as pathSector } from "./d";
import { contour, ring } from "./primitive";
import { sub, equal, dist } from "../utils/vector";

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

export function area(
  renderer,
  coordinate,
  { X1, Y1, X2, Y2, I: I0, ...styles }
) {
  // 极坐标需要连接首尾
  const I = coordinate.isPolar() ? [...I0, I0[0]] : I0;

  const points = [
    ...I.map((i) => [X1[i], Y1[i]]),
    ...I.map((i) => [X2[i], Y2[i]]).reverse(),
  ].map(coordinate);

  // 如果是在极坐标系下，绘制等高线
  if (coordinate.isPolar()) {
    return contour(renderer, { points, ...styles });
  }
  // 否者直接绘制区域
  return renderer.path({ d: pathArea(points), ...styles });
}

export function rect(renderer, coordinate, { x1, y1, x2, y2, i, ...styles }) {
  const v0 = [x1, y1];
  const v1 = [x2, y1];
  const v2 = [x2, y2];
  const v3 = [x1, y2];
  // 如果坐标系转置了，改变顶点的顺序
  const vs = coordinate.isTranspose() ? [v3, v0, v1, v2] : [v0, v1, v2, v3];
  const ps = vs.map(coordinate);
  const [p0, p1, p2, p3] = ps;
  // 笛卡尔坐标系绘制矩形
  if (!coordinate.isPolar()) {
    const [width, height] = sub(p2, p0);
    const [x, y] = p0;
    return renderer.rect({ x, y, width, height, ...styles });
  }

  // 获得圆心的位置
  const center = coordinate.center();
  const [cx, cy] = center;

  // 如果角度小于360度
  // 判断的方法是顶点是否重合
  // 绘制扇形
  if (!(equal(p0, p1) && equal(p2, p3))) {
    return renderer.path({ d: pathSector([center, ...ps]), ...styles });
  }

  const r1 = dist(center, p2); // 内半径
  const r2 = dist(center, p0); // 外半径
  return ring(renderer, { cx, cy, r1, r2, ...styles });
}
