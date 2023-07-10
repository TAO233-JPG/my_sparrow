import { createChannel, createChannels } from "./channel";
import { createGemetry } from "./geometry";
import { channelStyles } from "./style";
import { rect as shapeRect } from "./shape";

const channels = createChannels({
  x1: createChannel({ name: "x1", optional: false }),
  y1: createChannel({ name: "y1", optional: false }),
});

const rectRender = function (
  renderer,
  I,
  scales,
  values,
  directStyles,
  coordinate
) {
  const { x: X, y: Y, x1: X1, y1: Y1 } = values;
  return Array.from(I, (i) =>
    shapeRect(renderer, coordinate, {
      ...directStyles,
      ...channelStyles(i, values),
      x1: X[i],
      y1: Y[i],
      x2: X1[i],
      y2: Y1[i],
    })
  );
};

export const rect = createGemetry(channels, rectRender);
