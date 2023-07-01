import { createSVGElement, mount, applyAttributes } from "../utils";

/**
 *
 * @param {string} type
 * @param {*} context
 * @param {Object} attributes
 * @returns {SVGAElement}
 */
export function shape(type, context, attributes) {
  const el = createSVGElement(type);

  const { group } = context;
  mount(group, el);
  applyAttributes(el, attributes);
  return el;
}

export function rect(context, attributes) {
  const { width, height, x, y } = attributes;

  const rect = shape("rect", context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  });

  return rect;
}

export function line(context, attributes) {
  return shape("line", context, attributes);
}

export function circle(context, attributes) {
  return shape("circle", context, attributes);
}

export function text(context, attributes) {
  const { text, ...rest } = attributes;
  const el = shape("text", context, rest);
  el.textContent = text;
  return el;
}
export function path(context, attributes) {
  const { d } = attributes;
  return shape("path", context, { ...attributes, d: d.flat().join(" ") });
}

export function ring(context, attributes) {
  // r1 是内圆的半径，r2 是外圆的半径
  const { cx, cy, r1, r2, ...styles } = attributes;
  const { stroke, strokeWidth, fill } = styles;
  const defaultStrokeWidth = 1;
  const innerStroke = circle(context, {
    fill: "transparent",
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r1,
  });
  const ring = circle(context, {
    ...styles,
    strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
    stroke: fill,
    fill: "transparent",
    cx,
    cy,
    r: (r1 + r2) / 2,
  });
  const outerStroke = circle(context, {
    fill: "transparent",
    stroke: stroke || fill,
    strokeWidth,
    cx,
    cy,
    r: r2,
  });
  return [innerStroke, ring, outerStroke];
}
