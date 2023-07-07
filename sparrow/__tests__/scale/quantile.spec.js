import { createQuantile } from "../../src/scale/index.js";

describe("createQuantile", () => {
  test("createQuantile() return a point function", () => {
    const s = createQuantile({
      domain: [3, 6, 7, 8, 8, 10, 13, 15, 16, 20],
      range: ["a", "b", "c", "d"],
    });

    expect(s(3)).toBe("a");
    expect(s(7.1)).toBe("a");
    expect(s(8)).toBe("b");
    expect(s(8.9)).toBe("b");
    expect(s(9)).toBe("b");
    expect(s(13)).toBe("c");
    expect(s(14.9)).toBe("d");
    expect(s(20)).toBe("d");
  });
});
