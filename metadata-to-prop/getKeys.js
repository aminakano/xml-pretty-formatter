const fs = require("fs");
const xml2js = require("xml2js");
const { xmlFile } = require("../config");
const xml = fs.readFileSync(xmlFile);
const parser = require("properties-file");

const arr = async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = await result.EntityType.Property;
    const entityName = result.EntityType.Name[0].split("Type")[0];
    const arr = [];
    const obj = {};
    // console.log(json)
    // Expected format
    // [{
    //   key: val.Name[0],
    //   desc: val["sap:label"][0]
    // }]
    await json.forEach((val) => obj[val.Name[0]] = val["sap:label"][0]);
    // await json.forEach((val) => arr.push({
    //   key: val.Name[0],
    //   desc: val["sap:label"][0]
    // }));
    // arr.sort((a,b) => a.key - b.key);
    console.log(Object.keys(obj))
    
    return { arr, entityName };
  } catch (error) {
    console.log(error);
  }
};
arr();
// module.exports = arr;
