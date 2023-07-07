/**
 * 求点x在d1->d2 的比例
 * @param {number} x
 * @param {number} d1
 * @param {number} d2
 * @returns {number}
 */
export function normalize(x, d1, d2) {
  return (x - d1) / (d2 - d1);
}

/**
 * 根据 min 和 max 和 count，生成ticks数组
 * @param {number} min
 * @param {number} max
 * @param {number} count
 * @returns {number[]}
 */
export function ticks(min, max, count) {
  let isReverse = false;
  if (min > max) {
    [min, max] = [max, min];
    isReverse = true;
  }
  const step = tickStep(min, max, count);

  const start = Math.ceil(min / step);
  const stop = Math.floor(max / step);
  const n = Math.ceil(stop - start + 1);
  // n 不一定等于 count，所以生成的 ticks 的数量可能和指定的不一样
  const values = new Array(n);
  for (let i = 0; i < n; i += 1) {
    values[i] = round((start + i) * step);
  }
  return isReverse ? values.reverse() : values;
}

/**
 * 获取min 到 max 分为 count段，每段的长度
 * @param {number} min
 * @param {number} max
 * @param {number} count
 * @returns {number}
 */
export function tickStep(min, max, count) {
  const e10 = Math.sqrt(50); // 7.07
  const e5 = Math.sqrt(10); // 3.16
  const e2 = Math.sqrt(2); // 1.41

  // 获得目标平均间隔 step0，设 step0 = 10 ^ (m.n) m为整数部分，n为小数部分
  const step0 = Math.abs(max - min) / Math.max(1, count);
  // 获取指数的整数部分 m
  const m = Math.floor(Math.log10(step0));
  // 计算 error = 10 ^ (n) 此时 n 范围是 [0, 1)
  const error = step0 / 10 ** m;
  // 此时 step0 = error * 10 ^ m
  // 根据 error 的大小，调整为 1 或 2 或 5 或 10
  let factor = 1;
  if (error >= e10) factor = 10;
  else if (error >= e5) factor = 5;
  else if (error >= e2) factor = 2;
  // 最终间隔为 factor * 10 ^ m
  return factor * 10 ** m;
}

/**
 * 解决精度问题
 * @param {number} n
 * @returns {number}
 */
export function round(n) {
  return Math.round(n * 1e12) / 1e12;
}

/**
 * 调整定义域大小，与linear比例尺强相关
 * @param {[*, *]} domain
 * @param {{floor:Function, ceil: Function}} interval
 * @returns {[*, *]}
 */
export function nice(domain, interval) {
  const [min, max] = domain;
  return [interval.floor(min), interval.ceil(max)];
}

export function ceil(n, base) {
  return base * Math.ceil(n / base);
}

export function floor(n, base) {
  return base * Math.floor(n / base);
}

export function band({ domain, range, padding }) {
  const [y0, y1] = range;
  const n = domain.length;
  const step = (y1 - y0) / (n + padding);
  const bandWidth = step * (1 - padding);
  const interval = step - bandWidth;
  const x = (_, i) => y0 + interval + step * i;
  return {
    step,
    bandWidth,
    bandRange: new Array(n).fill(0).map(x),
  };
}
