import { createChannel, createChannels } from "./channel";
import { createGemetry } from "./geometry";
import { channelStyles } from "./style";
import { text as shapeText } from "./shape";

/**
 *
 * @param {*} renderer
 * @param {*} I
 * @param {*} scales
 * @param {*} values
 * @param {*} directStyles
 * @param {*} coordinate
 * @returns {function[]}
 */
function textRender(renderer, I, scales, values, directStyles, coordinate) {
  const defaults = {
    fontSize: "16",
    rotate: 0,
  };

  const { x: X, y: Y, text: T, rotate: R = [], fontSize: FS = [] } = values;
  return Array.from(I, (i) => {
    const { r: dr, ...restDefaults } = defaults;
    return shapeText(renderer, coordinate, {
      ...restDefaults,
      ...directStyles,
      ...channelStyles(i, values),
      x: X[i],
      y: Y[i],
      text: T[i],
      rotate: R[i] ?? defaults.rotate,
      fontSize: FS[i] ?? defaults.fontSize,
    });
  });
}

const textChannels = createChannels({
  rotate: createChannel({ name: "rotate" }),
  fontSize: createChannel({ name: "fontSize" }),
  text: createChannel({ name: "text", optional: false }),
});

export const text = createGemetry(textChannels, textRender);
