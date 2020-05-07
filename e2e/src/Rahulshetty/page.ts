import { browser, by, element, $$, protractor, Browser } from 'protractor';

export class AppPage {


  url = "https://rahulshettyacademy.com/#/index"
  url1="https://rahulshettyacademy.com/AutomationPractice/"
  category = $$(`div.owl-stage div[class='owl-item active'] div h3 a`)

  radiocheckbox=$$(`input[class='radioButton']`)
  radiobuttontext=$$(`div[id='radio-btn-example'] label`)

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  async applicationLogin() {

    await browser.get(this.url1)
    // await
  }

  async selectCategory(value) {

    await this.category.each(function (elemetn, index) {

      elemetn.getText().then(function (text) {
        if (text === value) {
          this.category.click()
        }
        else {
          return console.log("value not matched");
        }
      })

    })



  }

  async selectCategory1() {
    let EC= protractor.ExpectedConditions

let value = false


    await this.category.each(async function (element) {
     await element.getText().then(async function (text) {
        console.log(text)

       if(text==="PRACTICE PROJECT"){
        console.log("loop valid")
        //browser.sleep(30000)
       await  browser.wait(EC.visibilityOf(element))
        await browser.executeScript("arguments[0].click()", element)
      //await element.click()
      value = true
      }
      })
    })
    if(value===false){
      browser.sleep(30000)
      this.selectCategory1()
    }
  }


  async radiobuttonselectwithforloop(){
  let total = await this.radiobuttontext.count()

  for(let i=0;i<=total;i++){
let text = await this.radiobuttontext.get(i).getText()
if(text==="Radio1"){

  await this.radiocheckbox.get(i).click()
  await browser.sleep(10000)
  let validation = await this.radiocheckbox.get(i).isSelected()
  return validation

}

  }
  }
  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
