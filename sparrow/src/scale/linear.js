import {
  ceil,
  floor,
  nice,
  normalize,
  tickStep,
  ticks,
} from "../utils/scale.js";

/**
 *
 * @param {object} options
 * @param {[*, *]} options.domain
 * @param {[*, *]} options.range
 * @param {(x, start, end) => *} options.interpolate
 * @returns
 */
export default function createLinear({
  domain,
  range,
  interpolate = interpolateNumber,
}) {
  let [x0, x1] = domain;
  const [y0, y1] = range;

  const scale = (x) => {
    const t = normalize(x, x0, x1);
    return interpolate(t, y0, y1);
  };

  /* 获取刻度数组 */
  scale.ticks = (tickCount) => ticks(x0, x1, tickCount);
  /* 调整domain范围 */

  scale.nice = (tickCount) => {
    const step = tickStep(x0, x1, tickCount);
    [x0, x1] = nice([x0, x1], {
      floor: (x) => floor(x, step),
      ceil: (x) => ceil(x, step),
    });
  };

  return scale;
}

/**
 * 求start->stop中占比t的长度
 * @param {number} t 0<=t<=1
 * @param {number} start
 * @param {number} stop
 * @returns {number}
 */
export function interpolateNumber(t, start, stop) {
  return start * (1 - t) + stop * t;
}
