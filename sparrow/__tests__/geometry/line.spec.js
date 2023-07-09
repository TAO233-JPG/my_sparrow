import { line } from "../../src/geometry";
import { plot } from "./utils";
import { polar, cartesian } from "../../src/coordinate";

describe("line", () => {
  test("line has expected defaults", () => {
    const channels = line.channels();
    expect(channels).toEqual({
      x: { name: "x", optional: false },
      y: { name: "y", optional: false },
      z: { name: "z", optional: true },
      fill: { name: "fill", optional: true },
      stroke: { name: "stroke", optional: true },
    });
  });

  test("one line scater for x, y", () => {
    plot({
      geometry: line,
      index: [0, 1, 2],
      channels: {
        stroke: ["#5B8FF9", "#5B8FF9", "#5B8FF9", "#F6BD16"],
        x: [0.1, 0.2, 0.7], // 600
        y: [0.3, 0.6, 0.9], // 400
      },
    }).toHasAttributes({
      tagName: "path",
      d: "M 60 120 L 120 240 L 420 360",
    });
  });

  test("two line scater for x, y, z", () => {
    plot({
      geometry: line,
      index: [0, 1, 2, 3, 4],
      styles: {
        "stroke-width": 3,
      },
      channels: {
        stroke: ["#5B8FF9", "#F6BD16", "#5B8FF9", "#F6BD16", "#FE1A6C"],
        x: [0.1, 0.24, 0.7, 0.7, 0.3], // 600
        y: [0.3, 0.6, 0.9, 0.2, 0.23], // 400
        z: ["a", "b", "a", "a", "b"], // 400
      },
    }).toHasAttributes({
      tagName: "path",
      d: "M 60 120 L 420 360 L 420 80",
    });
  });

  test("radar", () => {
    plot({
      geometry: line,
      index: [0, 1, 2, 3, 4, 5, 6, 7],
      scales: {},
      styles: {
        stroke: "black",
      },
      transforms: [
        polar({
          startAngle: 0,
          endAngle: Math.PI * 2,
          innerRadius: 0.2,
          outerRadius: 1,
        }),
        cartesian(),
      ],
      channels: {
        stroke: [
          "#5B8FF9",
          "#5B8FF9",
          "#5B8FF9",
          "#5B8FF9",
          "#F6BD16",
          "#F6BD16",
          "#F6BD16",
          "#F6BD16",
        ],
        x: [0.1, 0.3, 0.5, 0.9, 0.1, 0.3, 0.5, 0.9],
        y: [0.2, 0.1, 0.9, 0.2, 0.9, 0.3, 0.4, 0.9],
        z: ["a", "a", "a", "a", "b", "b", "b", "b"],
      },
      get: (d) => d[1],
    }).toHasAttributes({
      tagName: "path",
      d: "M 345.30495168499704 232.91597412837854 L 253.029416855008 344.56059047686335 L 164.00000000000003 200 L 345.30495168499704 167.08402587162146 L 345.30495168499704 232.91597412837854",
    });
  });
});
