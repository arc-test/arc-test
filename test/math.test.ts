import { add, multiply, subtract, divide } from "../src/math";

describe("Math functions", () => {
  it("should multiply 6 by 3", () => {
    const result = multiply(6, 3);
    expect(result).toEqual(18);
  });

  it("should add 6 by 3", () => {
    const result = add(6, 3);
    expect(result).toEqual(9);
  });

  it("should subtract 6 by 3", () => {
    const result = subtract(6, 3);
    expect(result).toEqual(3);
  });

  it("should divide 6 by 3", () => {
    const result = divide(6, 3);
    expect(result).toEqual(2);
  });
  
});
