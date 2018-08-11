const expect = require("chai").expect;
const Calculator = require("../../src/js/lib/Calculator");

describe("Calculator", () => {
  let calculator = null;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should have an add function", () => {
    expect(calculator.add).to.exist;
  });

  it("should add 2 + 2 together correctly", () => {
    expect(calculator.add(2, 2)).to.equal(4);
  });

  it("should subtract 10 - 5 correctly", () => {
    expect(calculator.subtract(10, 5)).to.equal(5);
  });

  it("should multiple 5 * 5 correctly", () => {
    expect(calculator.multiply(5, 5)).to.equal(25);
  });

  it("should divide 100 / 20 correctly", () => {
    expect(calculator.divide(100, 20)).to.equal(5);
  });
});
