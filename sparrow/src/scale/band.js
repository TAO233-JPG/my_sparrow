import createOrdinal from "./ordinal.js";
import { band } from "../utils/scale.js";
/**
 * Band 比例尺主要用于将离散的序数属性映射为连续的数值属性，往往用于条形图中确定某个条的位置。
 * @param {object} options
 * @param {*[]} options.domain
 * @param {number[]} options.range
 * @param {number} options.padding
 * @returns
 */
export default function createBand(options) {
  const { step, bandWidth, bandRange } = band(options);

  const scale = createOrdinal({ ...options, range: bandRange });
  scale.bandWidth = () => bandWidth;
  scale.step = () => step;
  return scale;
}
