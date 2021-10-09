const fs = require("fs");
const xml2js = require("xml2js");
const { xmlFile } = require("../config");
const xml = fs.readFileSync(xmlFile);
const parser = require("properties-file");
const util = require("util");

const arr = async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = await result.EntityType.Property;
    const entityName = result.EntityType.Name[0].split("Type")[0];
    const obj = {};

    await json.forEach((val) => obj[val.Name[0]] = val["sap:label"][0]);

    const unsortedMap = new Map(Object.entries(obj));
    const unsortedArray = [...unsortedMap];
    const sortedArray = unsortedArray.sort(([key1, val1], [key2, val2]) => key1.localeCompare(key2));
    const sortedMap = new Map(sortedArray);
    const sortedObj = Object.fromEntries(sortedMap);
    console.log(sortedObj)

    return { arr, entityName };
  } catch (error) {
    console.log(error);
  }
};
arr();
// module.exports = arr;
// console.log(util.inspect(obj, {maxArrayLength: null}))