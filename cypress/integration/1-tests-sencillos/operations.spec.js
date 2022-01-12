import { isObject, add } from "../../../instrumented/utils/operations";

describe("tests unitarios", () => {
  it("suma de dos números", () => {
    expect(add(2, 3)).to.equal(5);
  });
});
