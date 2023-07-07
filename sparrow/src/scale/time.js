import createLinear from "./linear.js";

export default function createTime({ domain, ...rest }) {
  const transform = (x) => x.getTime();
  const linearScale = createLinear({
    domain: domain.map(transform),
    ...rest,
  });

  const scale = (x) => linearScale(x);

  scale.nice = (tickCount) => linearScale.nice(tickCount);
  scale.ticks = (tickCount) => linearScale.ticks(tickCount).map((d) => new Date(d));
  return scale;
}
