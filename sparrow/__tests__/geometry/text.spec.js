// import { cartesian, polar } from "../../src/coordinate";
import { text } from "../../src/geometry";
import { plot } from "./utils";

describe("text", () => {
  test("text has expected defaults", () => {
    const channels = text.channels();
    expect(channels).toEqual({
      x: { name: "x", optional: false },
      y: { name: "y", optional: false },
      text: { name: "text", optional: false },
      rotate: { name: "rotate", optional: true },
      fontSize: { name: "fontSize", optional: true },
      fill: { name: "fill", optional: true },
      stroke: { name: "stroke", optional: true },
    });
  });

  test("scatter for x, y, stroke", () => {
    plot({
      geometry: text,
      index: [0, 1, 2, 3],
      scales: {},
      styles: {
        strokeWidth: 2,
      },
      channels: {
        stroke: ["#5B8FF9", "#5AD8A6", "#5D7092", "#F6BD16"],
        x: [0.2, 0.5, 0.7, 0.9],
        y: [0.3, 0.1, 0.4, 0.5],
        text: ["vue", "react", "webgl", "three.js"],
      },
    }).toHasAttributes({
      tagName: "text",
      x: "0",
      y: "0",
      "stroke-width": "2",
    });
  });

  test("scatter for x, y, fill, rotate, fontSize", () => {
    plot({
      geometry: text,
      index: [0, 1, 2, 3],
      scales: {},
      styles: {},
      channels: {
        stroke: ["#5B8FF9", "#5AD8A6", "#5D7092", "#F6BD16"],
        fill: ["#5B8FF9", "#5AD8A6", "#5D7092", "#F6BD16"].reverse(),
        x: [0.2, 0.5, 0.7, 0.9],
        fontSize: [39, 24, 23, 18],
        y: [0.3, 0.1, 0.4, 0.5],
        text: ["vue", "react", "webgl", "three.js"],
        rotate: [3, 1, 34, 55],
      },
    }).toHasAttributes({
      tagName: "text",
      x: "0",
      y: "0",
      "font-size": "39",
      stroke: "#5B8FF9",
      fill: "#F6BD16",
    });
  });
});
