window = 
{
	toString: function()
	{
		return '[object GjsGlobal]';
	},
	
	location: 
	{
		search: "Rapise"
	},
	
	timeoutId: 1,
	
	setTimeout: function(fn, timeout)
	{
		fn();
		return this.timeoutId++;
	},
	
	clearTimeout: function(id)
	{
	
	}
}

function RapiseReporter() 
{
	this.jasmineStarted = function() 
	{
		Log("#JASMINE STARTED");
	};
	
	this.jasmineDone = function(runDetails) 
	{
		Log("#JASMINE DONE");
	};
	
	this.suiteStarted = function(suite) 
	{
		Log("#SUITE STARTED " + suite.fullName);
		Tester.BeginTest("#SUITE " + suite.fullName);
	};
	
	this.suiteDone = function(suite) 
	{
		Log("#SUITE DONE " + suite.fullName + " (" + suite.status + ")");
		Tester.EndTest();
	};

	this.specStarted = function(result) 
	{

	};

	this.specDone = function(spec) 
	{
		Log(spec.fullName + "(" + spec.status + ")");
		var details = [];
		if (spec.failedExpectations.length > 0)
		{
			for(var ei = 0; ei < spec.failedExpectations.length; ei++)
			{
				var msg = spec.failedExpectations[ei].message;
				Log("    " + msg);
				details.push(new SeSReportText(msg));
			}
		}
		Tester.Assert("#" + spec.fullName, spec.failedExpectations.length == 0, details);
	};
};

g_rapiseReporter = new RapiseReporter();
