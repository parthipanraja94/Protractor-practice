import { AppPage } from './page';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Application open', async () => {
    browser.waitForAngularEnabled(false)
    await page.applicationLogin();
    expect(await page.getTitleText()).toEqual('Rahul Sheety Academy');
  });

  // it('category selection', async () => {
  //  await page.selectCategory1();
  //   //expect(page.getTitleText()).toEqual('Rahul Sheety Academy');
  // });

  it('Radio button selection validation', async () => {
 let result = await page.radiobuttonselectwithforloop();
 //await page.radiobuttonselectwitheachmethod()
 //await page.radiobuttonselectwithfiltermothod()
  expect(result).toBe(true);
  });























  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
