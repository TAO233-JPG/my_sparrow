import { createChannel, createChannels } from "./channel";
import { createGemetry } from "./geometry";
import { channelStyles } from "./style";
import { link as shapeLink } from "./shape";

const channels = createChannels({
  x1: createChannel({ name: "x1", optional: false }),
  y1: createChannel({ name: "y1", optional: false }),
});

function linkRender(render, I, scales, values, directStyle, coordinate) {
  const { x: X1, y: Y1, x1: X2, y1: Y2 } = values;
  return Array.from(I, (i) =>
    shapeLink(render, coordinate, {
      ...directStyle,
      ...channelStyles(i, values),
      x1: X1[i],
      y1: Y1[i],
      x2: X2[i],
      y2: Y2[i],
    })
  );
}

export const link = createGemetry(channels, linkRender);
