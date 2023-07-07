import { createBand } from "../../src/scale/index.js";

describe("createBand", () => {
  test("createBand() return a bandScale function", () => {
    const scale = createBand({
      domain: ["vue", "react", "ui"],
      range: [0, 320],
      padding: 0.2,
    });

    expect(scale("vue")).toBe(20);
    expect(scale("react")).toBe(120);
    expect(scale("ui")).toBe(220);
    expect(scale.bandWidth()).toBe(80);
    expect(scale.step()).toBe(100);
  });
});
