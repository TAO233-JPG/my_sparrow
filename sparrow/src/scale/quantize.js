import createThreshold from "./threshold";

export default function createQuantize({ domain, range, ...rest }) {
  const [d0, d1] = domain;
  const n = range.length - 1;
  const step = (d1 - d0) / (n + 1);
  const quantizeDomain = new Array(n).fill(0).map((_, i) => step * (i + 1));
  return createThreshold({ domain: quantizeDomain, range, ...rest });
}
