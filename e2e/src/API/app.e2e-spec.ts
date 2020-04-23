import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
var Request = require("request");
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator';
let idNumber = null
const randomName: string = uniqueNamesGenerator({
  dictionaries: [adjectives, colors, animals]
});

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    console.log(randomName)

  });

  it("Create New Employee", function (done) {
    var options = {
        url: 'http://dummy.restapiexample.com/api/v1/create'
        ,
        headers: {
            "content-type": "application/json",

        },
        json: {
          "name":randomName,
          "salary":"123",
          "age":"23"
            }

    }

    Request.post(options, function (error, response, body) {

        expect(response.statusCode).toBe(200);
        expect(response.statusMessage).toBe("OK");
        console.log(response.body)
        idNumber = response.id
   // itemHandlingDetailID = response.body.itemHandlingDetailID
        done();

    });
})
//   it('should display emplyee name', (done) => {
// let options={
//   headers: { "content-type": "application/json" },
//   url: 'http://dummy.restapiexample.com/api/v1/employee/'+idNumber,
//   json: {
//   }
// }
//     Request.get(options, async function(error, response, body){
//       expect(response.statusCode).toBe(200);
//       expect(response.statusMessage).toBe("OK");
//       console.log(error)
//       console.log(response.body)
//       done();
//     });

    it('Delete Emplyee', (done) => {
      let options={
        headers: { "content-type": "application/json" },
        url: 'http://dummy.restapiexample.com/api/v1/delete/2'+idNumber,
        json: {
        }
      }
          Request.delete(options, async function(error, response, body){
            expect(response.statusCode).toBe(200);
            expect(response.statusMessage).toBe("OK");
            console.log(error)
            console.log(response.body)
            done();
          });
        });
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

