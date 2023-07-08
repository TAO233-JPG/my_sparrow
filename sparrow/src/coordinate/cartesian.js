import { curry } from "../utils/helper";
import { scale, translate } from "./transform";

/* 笛卡尔坐标系变换的实现： */
function coordinate(transformOptions, canvasOptions) {
  const { x, y, width, height } = canvasOptions;
  return [scale(width, height), translate(x, y)];
}
export const cartesian = curry(coordinate);
