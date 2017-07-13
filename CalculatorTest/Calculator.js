function Calculator()
{
	this.pid = 0;
}

Calculator.prototype.Launch = function()
{
	this.pid = Global.DoLaunch('calc.exe');
}

Calculator.prototype.Close = function()
{
	Global.DoKillByPid(this.pid);
}

Calculator.prototype.isVisible = function()
{
	return Global.DoWaitFor('Result') != null;
}

Calculator.prototype.Add = function(op1, op2)
{
	SeS("_" + op1).DoClick();
	SeS('Add').DoClick();
	SeS("_" + op2).DoClick();
	SeS('Equals').DoClick();
	return Global.DoTrim(SeS('Result').GetValue());
}

Calculator.prototype.Multiply = function(op1, op2)
{
	SeS("_" + op1).DoClick();
	SeS('Multiply').DoClick();
	SeS("_" + op2).DoClick();
	SeS('Equals').DoClick();
	return Global.DoTrim(SeS('Result').GetValue());
}
