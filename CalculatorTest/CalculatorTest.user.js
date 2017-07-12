//Put your custom functions and variables in this file

eval(File.IncludeOnce('%WORKDIR%/../Jasmine/init.js'));

with(window)
{
	eval(File.IncludeOnce('%WORKDIR%/../Jasmine/jasmine.js'));
	eval(File.IncludeOnce('%WORKDIR%/../Jasmine/boot.js'));
	
	eval(File.IncludeOnce('%WORKDIR%/Calculator.js'));
	eval(File.IncludeOnce('%WORKDIR%/CalculatorSpec.js'));
}
