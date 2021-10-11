const fs = require("fs");
const xml2js = require("xml2js");
const { xmlFile } = require("../config");
const xml = fs.readFileSync(xmlFile);
const parser = require("properties-file");


(async () => {
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
    // Parse obj to properties string
    const properties = parser.stringify(sortedObj);

    // Write the string to a properties file
    fs.writeFileSync(`../properties/${entityName}.properties`, properties);

  } catch (error) {
    console.log(error);
  }
})();

// const util = require("util");
// console.log(util.inspect(obj, {maxArrayLength: null}))