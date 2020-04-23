import { browser, element,by} from 'protractor'
declare var require: any
import { readFileSync } from 'fs'
import { JsonUtils } from '../Utils/jsonUtils';
describe('Protractor Typescript Demo', async function() {
	it('title verifications',async function() {
	  browser.get('https://angular.io/cli');
	 var title = await browser.getTitle()
		console.log("The title is  : "+title)
///////////////////////////////////////// Data Read//////////////////////////////////////////////
    ///********************using javascript *********** */
		// var js =require('C:\\Users\\Arun\\Desktop\\Parthi\\Protractorcherchertech\\src-code\\Data\\data1.json')
		// element(by.css(`input[placeholder="Search"]`)).sendKeys(js["name"])

//**********file system - Synchronous methods  --please use this */
    //  var fs = require('fs')
		// let fssync =fs.readFileSync('C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\data1.json')
		// let data = JSON.parse(fssync)
		// element(by.css(`input[placeholder="Search"]`)).sendKeys(data["password"])
		//element(by.css(`input[placeholder="Search"]`)).sendKeys(data["website"]["age"])

/////using common function//////////////

let jsonreaddata = new JsonUtils()
let originaldata = jsonreaddata.readJsonFile("C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\data1.json")
console.log(originaldata["name"])
let letdatafromkey = jsonreaddata.readJsonFilewithKey("name")
console.log(letdatafromkey)

let combinedmethod = jsonreaddata.readJsonFilecombined("C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\data1.json","password")

console.log(combinedmethod)

let combinedmethodwithoutkey = jsonreaddata.readJsonFilecombined('e2e\\src\\chechertech\\Data\\data1.json')//how this relative path is correct

console.log(combinedmethodwithoutkey)



    ////**************************aysynchronous method -- knowledge purpose */
//     fs.readFile('C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\data1.json', `utf8`, function(error, data){
// var data = JSON.parse(data)
// console.log(data["website"]["name"])
//     })
//     console.log("asyncronous method")

/////////////////////////////////// Data Write ///////////////////////////////////////////


////using mock data /////
var fs = require('fs')

// var json = {

//   "key":"value"
// }
// fs.writeFileSync('C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\datawrite.json',JSON.stringify(json))


/////using data from screeen///////////////
// let newtitle = await browser.getTitle()
// let feature = await element.all(by.css('aio-top-menu li span.nav-link-inner')).get(0).getText()

// let samplejson ={
// "title":newtitle,
// "url":{
//   "angularfeatue":feature
// }

// }

//fs.writeFileSync('C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\dataurlwrite.json',JSON.stringify(samplejson))




		// browser.sleep(5000);
	  })
	});
