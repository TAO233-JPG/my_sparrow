import { createIdentity } from "../../src/scale/index.js";

describe("createIdentity", () => {
  test("createIdentity() return a identity function", () => {
    const scale = createIdentity();

    expect(scale("vue")).toBe("vue");
    expect(scale(1)).toBe(1);
    expect(scale(true)).toBe(true);
    expect(scale(undefined)).toBe(undefined);
    expect(scale(null)).toBe(null);
  });
});
