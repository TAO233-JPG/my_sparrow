export function identity(x) {
  return x;
}

export function compose(...rest) {
  return rest.reduce((total, cur) => (x) => cur(total(x)), identity);
}

export function curry(fn) {
  // 获得函数参数的数量
  const arity = fn.length;
  return function curried(...args) {
    const newArgs = args.length === 0 ? [undefined] : args;
    // 如果当前收集到的参数数量大于需要的数量，那么执行该函数
    if (newArgs.length >= arity) return fn(...newArgs);
    // 否者，将传入的参数收集起来
    // 下面的写法类似于
    // return (...args1) => curried(...args, ...args1);
    return curried.bind(null, ...newArgs);
  };
}

/**
 *
 * @param {T[]} data
 */
export function group(data, key = (d) => d) {
  const map = new Map();

  for (const item of data) {
    const k = key(item);

    if (map.has(k)) {
      map.get(k).push(item);
    } else {
      map.set(k, [item]);
    }
  }
  return map;
}

export function lastOf(arr) {
  return arr[arr.length - 1];
}

export function firstOf(array) {
  return array[0];
}
export function min(array, accessor) {
  return Math.min(...array.map(accessor));
}

export function max(array, accessor) {
  return Math.max(...array.map(accessor));
}

export function bisect(
  array,
  x,
  lo = 0,
  hi = array.length,
  accessor = identity
) {
  let i = lo;
  let j = hi;
  while (i < j) {
    const mid = (i + j) >>> 1;
    if (accessor(array[mid]) < x) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }
  return i;
}

export function floor(n, base) {
  return base * Math.floor(n / base);
}
export function ceil(n, base) {
  return base * Math.ceil(n / base);
}
