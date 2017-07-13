# jasmine-bdd-integration-for-rapise

Integration of Rapie with Jasmine BDD Framework.

## init.js
This file contains stubs that make Jasmine thinking it is loaded into a browser.

## boot.js
This is a customized version of default `boot.js` file included into Jasmine distribution. We removed HtmlReporter and load RapiseReporter instead. 

## RapiseReporter
This reporter implements all 6 handlers defined in `jasmine.js`:

```
jasmineStarted, jasmineDone, suiteStarted, suiteDone, specStarted, specDone
```

RapiseReporter redirects data passed by Jasmine during test execution to Rapise native report.

## CalculatorTest
Example of testing Windows Calculator using BDD approach.
