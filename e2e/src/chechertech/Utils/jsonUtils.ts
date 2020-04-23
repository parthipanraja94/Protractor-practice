var filsystem = require('fs')

export class JsonUtils{

public readJsonFile(path:string){
	return JSON.parse(filsystem.readFileSync(path))
}
public readJsonFilewithKey(key:string, path="C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\data1.json"){
  return JSON.parse(filsystem.readFileSync(path))[key]
}

public readJsonFilecombined(path="C:\\Users\\Arun\\Desktop\\Parthi\\API\\e2e\\src\\chechertech\\Data\\data1.json",key?:string){
if(key!=undefined){
  return JSON.parse(filsystem.readFileSync(path))[key]
}
return JSON.parse(filsystem.readFileSync(path))
}



}
