describe("Calculator", function() 
{
	var calculator;
	
	beforeEach(function() 
	{
		calculator = new Calculator();
		calculator.Launch();
	});
	
	afterEach(function() 
	{
		calculator.Close();
	});
	
	it("should be visible on screen", function() 
	{
		expect(calculator.isVisible()).toEqual(true);
	});
	
	describe("Sum Module", function() 
	{
		it("should calculate 2 + 2", function() 
		{
			expect(calculator.Add(2, 2)).toEqual("4");
		});
		
		it("should fail for demo purposes", function() 
		{
			expect(false).toEqual(true);
		});
	});
	
	describe("Multiplication Module", function() 
	{
		it("should calculate 2 * 2", function() 
		{
			expect(calculator.Multiply(2, 2)).toEqual("4");
		});
	});
});
