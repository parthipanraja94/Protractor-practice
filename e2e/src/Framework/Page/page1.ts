
import{$,$$, browser} from 'protractor'
export class  page1{
  readonly URL='https://www.flipkart.com/'
  readonly searchBox=$('input[placeholder="Search for products, brands and more"]')
  readonly searchIcon =$$('svg g path._2BhAHa').get(1)
  readonly searchResults=$('span._2yAnYN')

  async search(){
await this.searchBox.sendKeys('televisions')
await this.searchIcon.click()
return await this.searchResults.getText()
browser.sleep(5000)
  }




}
