const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray } = require("../utils/myUtils");
const { xmlFile } = require("../config");
const xml = fs.readFileSync(xmlFile);

const arr = async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = await result.EntityType.Property;
    const entityName = result.EntityType.Name[0].split("Type")[0];
    const arr = [];
    await json.forEach((val) => arr.push(val.Name[0]));
    arr.sort(sortArray);
    return { arr, entityName };
  } catch (error) {
    console.log(error);
  }
};

module.exports = arr;
