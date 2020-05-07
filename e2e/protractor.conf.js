// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const path = require('path');

const { SpecReporter } = require('jasmine-spec-reporter');
// @ts-ignore
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
// @ts-ignore
var env = require('./src/environment');
// @ts-ignore
var jasmineReporters = require('jasmine-reporters');
var PrettyReporter = require('protractor-pretty-html-reporter').Reporter;
const now = new Date();
const fs = require('fs');

// @ts-ignore
exports.report_name = 'Report-' + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
exports.logfile_name = 'results-' + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds();
var Reporter = path.resolve("./") + '\\' + 'e2e\\src\\Framework\\Target' + '\\';
var report = `${Reporter}` + '\\' + exports.report_name;
const mkdirSync = function (report) {
  try {
    fs.mkdirSync(report);
  }
  catch (err) {
    if (err.code !== 'EEXIST')
      throw err;
  }
};
// @ts-ignore
var prettyReporter = new PrettyReporter({
    // required, there is no default
    // @ts-ignore
    path: report,
    screenshotOnPassed: true
});

//-----Allure report ------//

/**
 @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    //'./src/API/app.e2e-spec.ts'
    //'e2e\\src\\API\\app.e2e-spec.ts',
    //'./src/API/app.e2e-spec.ts',
    //'./src/chechertech/Specs/jsonspec1.ts'
    //'e2e\\src\\chechertech\\Specs\\jsonspec1.ts'//----why wrong

    //---framework
    // './src/Framework/Specs/spec1.ts',
    // './src/Framework/Specs/spec2.ts',

    './src/Rahulshetty/spec.ts'

  ],
  capabilities: {
    browserName: 'chrome',
    // chromeOptions: {
    //   args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //   }
     shardTestFiles: true,
     maxInstances: 1,
    // sequential: true,
    //shardOnSpec: true,
    // splitTestsBetweenCapabilities: true,
  },
  directConnect: true,
  //baseUrl: 'http://localhost:4200/',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 50000,
    print: function () { }
  },


  beforeLaunch() {
    prettyReporter.startReporter();
  },

  onPrepare: async () => {
    let browser = require('protractor').browser
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    browser.ignoreSynchronization = false;
    browser.manage().window().maximize()
    await browser.waitForAngularEnabled(false)

    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    ///---------- pretty reporter---------------//
    jasmine.getEnv().addReporter(prettyReporter);
    //------------------hasmine html2 reporter ------------------//
    jasmine.getEnv().addReporter(
      // @ts-ignore
      new Jasmine2HtmlReporter({
        savePath: 'target'
      }));


      //---------------------- XML Generation --------------------//
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: 'target',
      filePrefix: 'reportXMLoutput'
    }));
//------- Allure report  ----/
var AllureReporter = require('jasmine-allure-reporter');
// @ts-ignore
jasmine.getEnv().addReporter(new AllureReporter({
  resultsDir: 'allure-results'
}));

// @ts-ignore
jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function(done){
      browser.takeScreenshot().then(function (png) {
        // @ts-ignore
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    });

  },

  afterLaunch: function () {
    // @ts-ignore
    // failFast.clean(); // Removes the fail file once all test runners have completed.
  },

  onComplete: async function () {
    let browser = require('protractor').browser
    await browser.quit();

  },

  // @ts-ignore
  params: {
    // @ts-ignore
    user: {

      userName: 'default',
      // @ts-ignore
      password: 'default',
      // @ts-ignore
      userNameusp: 'rcon982',
      // @ts-ignore
      passwordusp: 'jb7678',
      // @ts-ignore
      environment: 'default',
      // @ts-ignore
      browserType: 'chrome',
      // @ts-ignore
      commitmentUrl: '-prof2',
      // @ts-ignore
      accountContactURL: '',
      // @ts-ignore
      uireadytimeout: 60000,
      // @ts-ignore
      uiloadertimeout: 240000,
      // @ts-ignore
      shipmentID: 'default'
    },
  },
};
