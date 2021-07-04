const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray } = require("./utils/myUtils");

const xml = fs.readFileSync("./xml/metadata.xml");

const arr = async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = await result.EntityType.Property;
    const arr = [];
    await json.forEach((val) => arr.push(val.Name[0]));
    arr.sort(sortArray);
    return arr;
  } catch (error) {
    console.log(error);
  }
};

module.exports = arr;
