window.RESULTS.push({"options":{"screenshotOnPassed":true,"writeReportEachSpec":true,"showBrowser":true,"highlightSuspectLine":true,"driver":null,"path":"C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\Framework\\Target\\\\Report-2020-5-7-13-3-22"},"timer":{"started":"2020-05-07T07:33:47.615Z","stopped":"2020-05-07T07:34:26.889Z","duration":39274},"counts":{"specs":2,"failed":2},"sequence":[{"id":"spec0","description":"Spec 1","fullName":"Flipkart product order Spec 1","failedExpectations":[{"matcherName":"","message":"Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.","stack":"Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at listOnTimeout (internal/timers.js:549:17)\n    at processTimers (internal/timers.js:492:7)","passed":false,"expected":"","actual":"","suspectLine":"    at listOnTimeout (internal/timers.js:549:17)","hasSuspectLine":true},{"matcherName":"toContain","message":"Expected [ Entry({ level: WARNING, message: 'https://www.flipkart.com/ - A cookie associated with a cross-site resource at http://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.', timestamp: 1588836854694, type: '' }), Entry({ level: WARNING, message: 'https://www.flipkart.com/ - A cookie associated with a cross-site resource at https://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.', timestamp: 1588836854695, type: '' }), Entry({ level: SEVERE, message: 'https://rome.api.flipkart.com/api/1/fdp - Failed to load resource: the server responded with a status of 406 (Not Acceptable)', timestamp: 1588836857397, type: '' }), Entry({ level: WARNING, message: 'https://www.flipkart.com/ - A cookie associated with a cross-site resource at http://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.', timestamp: 1588836859549, type: '' }), Entry({ level: WARNING, message: 'https://www.flipkart.com/ - A cookie associated with a cross-site resource at https://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.', timestamp: 1588836859549, type: '' }) ] not to contain <jasmine.objectContaining(Object({ level: SEVERE }))>.","stack":"Error: Failed expectation\n    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\Framework\\Specs\\spec1.ts:43:24\n    at step (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\tslib\\tslib.js:139:27)\n    at Object.next (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\tslib\\tslib.js:120:57)\n    at fulfilled (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\tslib\\tslib.js:110:62)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)","passed":false,"expected":{"sample":{"level":{"name_":"SEVERE","value_":1000}}},"actual":[{"level":"WARNING","message":"https://www.flipkart.com/ - A cookie associated with a cross-site resource at http://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.","timestamp":1588836854694,"type":""},{"level":"WARNING","message":"https://www.flipkart.com/ - A cookie associated with a cross-site resource at https://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.","timestamp":1588836854695,"type":""},{"level":"SEVERE","message":"https://rome.api.flipkart.com/api/1/fdp - Failed to load resource: the server responded with a status of 406 (Not Acceptable)","timestamp":1588836857397,"type":""},{"level":"WARNING","message":"https://www.flipkart.com/ - A cookie associated with a cross-site resource at http://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.","timestamp":1588836859549,"type":""},{"level":"WARNING","message":"https://www.flipkart.com/ - A cookie associated with a cross-site resource at https://flipkart.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.","timestamp":1588836859549,"type":""}],"suspectLine":"    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\Framework\\Specs\\spec1.ts:43:24","hasSuspectLine":true}],"passedExpectations":[{"matcherName":"toEqual","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2020-05-07T07:33:47.646Z","stopped":"2020-05-07T07:34:20.594Z","duration":"34 secs","prefix":"Flipkart product order ","browserName":"chrome","browserLogs":[{"level":"SEVERE","message":"https://rome.api.flipkart.com/api/1/fdp - Failed to load resource: the server responded with a status of 406 (Not Acceptable)","timestamp":1588836860705,"type":""}],"status":"failed","screenshotPath":"img/14564-1.png"},{"id":"spec1","description":"Search results - laptop ","fullName":"Flipkart product order Search results - laptop ","failedExpectations":[{"matcherName":"","message":"Failed: element click intercepted: Element <path class=\"_2BhAHa\" d=\"m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467\"></path> is not clickable at point (808, 25). Other element would receive the click: <svg width=\"20\" height=\"20\" viewBox=\"0 0 17 18\" class=\"\" xmlns=\"http://www.w3.org/2000/svg\">...</svg>\n  (Session info: chrome=81.0.4044.138)\n  (Driver info: chromedriver=81.0.4044.20 (f006328e39a9769596eb506c8841c3004b24e747-refs/branch-heads/4044@{#244}),platform=Windows NT 10.0.18362 x86_64)","stack":"WebDriverError: element click intercepted: Element <path class=\"_2BhAHa\" d=\"m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467\"></path> is not clickable at point (808, 25). Other element would receive the click: <svg width=\"20\" height=\"20\" viewBox=\"0 0 17 18\" class=\"\" xmlns=\"http://www.w3.org/2000/svg\">...</svg>\n  (Session info: chrome=81.0.4044.138)\n  (Driver info: chromedriver=81.0.4044.20 (f006328e39a9769596eb506c8841c3004b24e747-refs/branch-heads/4044@{#244}),platform=Windows NT 10.0.18362 x86_64)\n    at Object.checkLegacyResponse (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\error.js:546:15)\n    at parseHttpResponse (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\http.js:441:30\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)\nFrom: Task: WebElement.click()\n    at Driver.schedule (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\webdriver.js:807:17)\n    at WebElement.schedule_ (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2010:25)\n    at WebElement.click (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2092:17)\n    at actionFn (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\protractor\\built\\element.js:89:44)\n    at Array.map (<anonymous>)\n    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\protractor\\built\\element.js:461:65\n    at ManagedPromise.invokeCallback_ (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27Error: \n    at ElementArrayFinder.applyAction_ (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.<computed> [as click] (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.<computed> [as click] (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\protractor\\built\\element.js:831:22)\n    at page1.<anonymous> (C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\Framework\\Page\\page1.ts:11:23)\n    at step (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\tslib\\tslib.js:139:27)\n    at Object.next (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\tslib\\tslib.js:120:57)\n    at fulfilled (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\tslib\\tslib.js:110:62)\n    at processTicksAndRejections (internal/process/task_queues.js:97:5)\nFrom: Task: Run it(\"Search results - laptop \") in control flow\n    at UserContext.<anonymous> (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at QueueRunner.execute (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4199:10)\n    at Spec.queueRunnerFactory (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:909:35)\n    at Spec.execute (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:526:10)\n    at UserContext.fn (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:5340:37)\n    at attempt (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\nFrom asynchronous test: \nError: \n    at Suite.<anonymous> (C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\Framework\\Specs\\spec1.ts:30:5)\n    at addSpecsToSuite (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\Framework\\Specs\\spec1.ts:14:3\n    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine-data-provider\\src\\index.js:37:22\n    at Array.forEach (<anonymous>)\n    at C:\\Users\\Arun\\Desktop\\Parthi\\API\\node_modules\\jasmine-data-provider\\src\\index.js:30:24\n    at Object.<anonymous> (C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\Framework\\Specs\\spec1.ts:12:1)","passed":false,"expected":"","actual":"","suspectLine":"  (Session info: chrome=81.0.4044.138)","hasSuspectLine":true}],"passedExpectations":[{"matcherName":"toContain","message":"Passed.","stack":"","passed":true}],"pendingReason":"","started":"2020-05-07T07:34:22.887Z","stopped":"2020-05-07T07:34:26.298Z","duration":"4 secs","prefix":"Flipkart product order ","browserName":"chrome","browserLogs":[],"status":"failed","screenshotPath":"img/14564-2.png"}]});