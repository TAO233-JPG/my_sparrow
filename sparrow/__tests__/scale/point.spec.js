import { createPoint } from "../../src/scale/index.js";

describe("createPoint", () => {
  test("createPoint() return a point function", () => {
    const scale = createPoint({
      domain: ["vue", "react", "ui"],
      range: [0, 320],
    });

    expect(scale("vue")).toBe(80);
    expect(scale("react")).toBe(160);
    expect(scale("ui")).toBe(240);
    expect(scale.bandWidth()).toBe(0);
    expect(scale.step()).toBe(80);
  });
});
