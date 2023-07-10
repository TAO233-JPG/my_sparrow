import { createChannel, createChannels } from "./channel";
import { group } from "../utils/helper";
import { groupChannelStyles } from "./style";
import { area as shapeArea } from "./shape";
import { createGemetry } from "./geometry";

const channels = createChannels({
  x1: createChannel({ name: "x1", optional: false }),
  y1: createChannel({ name: "y1", optional: false }),
  z: createChannel({ name: "z" }),
});

function areaRender(renderer, I, scales, values, directStyles, coordinate) {
  const defaults = {};

  const { x: X0, y: Y0, z: Z, x1: X1, y1: Y1 } = values;
  const series = Z ? group(I, (i) => Z[i]).values() : [I];
  return Array.from(series, (I0) =>
    shapeArea(renderer, coordinate, {
      ...defaults,
      ...directStyles,
      ...groupChannelStyles(I0, values),
      X1: X0,
      Y1: Y0,
      X2: X1,
      Y2: Y1,
      I: I0,
    })
  );
}

export const area = createGemetry(channels, areaRender);
