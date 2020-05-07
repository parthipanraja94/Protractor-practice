import { page1 } from '../Page/page1';

import { browser, logging } from 'protractor';
import { CommonFunction } from '../Common-Functions/utility';
//import{using} from'jasmine-data-provider'

let using = require('jasmine-data-provider');
import { Data } from '../Data/data';


let dataprovidename = Data.testcase1;
using(dataprovidename, function(data:any, description:any){

  describe('Flipkart product order', () => {
    let Page: page1;
    let commonfunction: CommonFunction;

    beforeAll(() => {
       Page = new page1();
       commonfunction = new CommonFunction();
    });

    it('Spec 1', async ()=> {
     let result =  await commonfunction.applicatioopen(data)
     console.log(result)
     console.log(data.loggeduser)
    expect(result).toEqual(data.loggeduser)
    });

    it('Search results - laptop ', async ()=> {
      let result =  await Page.search()
      console.log(result)
     expect(result).toContain('televisions')
     });





    afterEach(async () => {
      // Assert that there are no errors emitted from the browser
      const logs = await browser.manage().logs().get(logging.Type.BROWSER);
      expect(logs).not.toContain(
        jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry)
      );
    });
  });

})
