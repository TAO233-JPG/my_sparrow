import { createOrdinal } from "../../src/scale/index.js";

describe("createOrdinal", () => {
  test("createOrdinal() return a ordinal function", () => {
    const scale = createOrdinal({
      domain: ["vue", "vue3", "react"],
      range: ["#fff", "#100", "#0ff"],
    });

    expect(scale("vue")).toBe("#fff");
    expect(scale("vue3")).toBe("#100");
    expect(scale("react")).toBe("#0ff");
  });
});
