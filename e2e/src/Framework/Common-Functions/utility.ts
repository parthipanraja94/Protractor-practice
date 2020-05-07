import { browser,by,$,$$, protractor } from 'protractor';
var EC = protractor.ExpectedConditions;

export class CommonFunction{
readonly URL='https://www.flipkart.com/'
readonly loggedUser =$$('div[class="_2aUbKa"]').get(0)

  async applicatioopen(data){
await browser.get(this.URL);
await browser.element.all(by.css(`input[autocomplete='off']`)).get(1).sendKeys(data.username);
await browser.element.all(by.css(`input[autocomplete='off']`)).get(2).sendKeys(data.password);
await browser.element(by.css(`button span`)).click()
// await browser.driver.wait(async() => {
//   const url:String = await browser.driver.getCurrentUrl();
// }, 20000);
this.ecVisibility(this.loggedUser)
 let user = await this.loggedUser.getText()
 return user;
  }

  async ecVisibility(element){

    browser.wait(EC.visibilityOf(element), 10000);
  }
}
