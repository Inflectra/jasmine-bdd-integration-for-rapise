# jasmine-bdd-integration-for-rapise

Integration of Rapie with Jasmine BDD Framework.

## Jasmine\init.js
This file contains stubs that make Jasmine thinking it is loaded into a browser.

### RapiseReporter
`init.js` also includes a reporter implementing all six handlers defined in `jasmine.js`:

```
jasmineStarted, jasmineDone, suiteStarted, suiteDone, specStarted, specDone
```

RapiseReporter redirects data passed by Jasmine during test execution to Rapise native report.

## Jasmine\boot.js
This is a customized version of default `boot.js` file included into Jasmine distribution. We removed HtmlReporter and load RapiseReporter instead. 

## CalculatorTest
Example of testing Windows Calculator using BDD approach.
