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
	
	},
	
	processResults: function()
	{
		var suites = this.jsApiReporter.suites();
		for(var si in suites)
		{
			var suite = suites[si];
			Log("#SUITE " + suite.fullName + "(" + suite.status + ")");
		}
		
		var specs = this.jsApiReporter.specs();
		for(var pi = 0; pi < specs.length; pi++)
		{
			var spec = specs[pi];
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
			Tester.Assert(spec.fullName, spec.failedExpectations.length == 0, details);
			
		}
	}
}
