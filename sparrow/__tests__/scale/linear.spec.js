import { createLinear } from "../../src/scale/index.js";

describe("createLinear", () => {
  test("createLinear() return a linear function", () => {
    const scale = createLinear({
      domain: [0, 1],
      range: [0, 100],
    });

    expect(scale(0)).toBe(0);
    expect(scale(0.2)).toBe(20);
    expect(scale(0.7)).toBe(70);
    expect(scale(1)).toBe(100);
  });
  test("test createLinear()  nice and tick", () => {
    const scale = createLinear({
      domain: [0.1, 9.9],
      range: [0, 100],
    });

    expect(scale.ticks(5)).toEqual([2, 4, 6, 8]);
    scale.nice(5);
    expect(scale.ticks(5)).toEqual([0, 2, 4, 6, 8, 10]);
  });
});
