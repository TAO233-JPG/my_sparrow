/**
 * 序数比例尺值域和定义域都是序数，主要用于将序数属性映射为同为序数属性的视觉属性
 * @param {object} options
 * @param {*[]} options.domain
 * @param {*[]} options.range
 * @returns {Function}
 */
export default function createOrdinal({ domain, range }) {
  const scale = (x) => {
    const idx = domain.findIndex((v) => x === v);
    if (idx >= 0) {
      return range[idx % range.length];
    }
    return undefined;
  };

  return scale;
}
