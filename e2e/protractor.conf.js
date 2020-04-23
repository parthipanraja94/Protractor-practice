// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * //@type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    //'./src/API/app.e2e-spec.ts'
   //'e2e\\src\\API\\app.e2e-spec.ts',
   //'./src/API/app.e2e-spec.ts',
   './src/chechertech/Specs/jsonspec1.ts'
   //'e2e\\src\\chechertech\\Specs\\jsonspec1.ts'//----why wrong

  ],
  capabilities: {
    browserName: 'chrome',
    // chromeOptions: {
    //   args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
    //   }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
