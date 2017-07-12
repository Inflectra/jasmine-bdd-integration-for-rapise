describe("Calculator", function() {
  var calculator;
  
  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should be running", function() {
    calculator.Launch();
    expect(calculator.isVisible).toEqual(true);
  });
});
