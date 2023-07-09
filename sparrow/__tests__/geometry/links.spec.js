import { link } from "../../src/geometry";
import { plot } from "./utils";

describe("link", () => {
  test("link has default channels", () => {
    const channels = link.channels();
    expect(channels).toEqual({
      x: { name: "x", optional: false },
      y: { name: "y", optional: false },
      x1: { name: "x1", optional: false },
      y1: { name: "y1", optional: false },
      fill: { name: "fill", optional: true },
      stroke: { name: "stroke", optional: true },
    });
  });

  test("scatter for x1, y1, x2, y2, stroke", () => {
    plot({
      geometry: link,
      index: [0, 1, 2],
      scales: {},
      styles: {
        stroke: "black",
        "stroke-width": 4,
      },
      channels: {
        x: [0.3, 0.4, 0.8],
        y: [0.6, 0.8, 0.28],
        x1: [0.13, 0.14, 0.18],
        y1: [0.15, 0.28, 0.3],
        stroke: ["#5B8FF9", "#5AD8A6", "#5D7092"],
      },
    }).toHasAttributes({
      tagName: "line",
      x1: "180",
      y1: "240",
      x2: "78",
      y2: "60",
      stroke: "#5B8FF9",
    });
  });
});
