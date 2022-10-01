const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray } = require("../utils/myUtils");
const { xmlFile } = require("./config");
const xml = fs.readFileSync(xmlFile);
(async (prop) => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const attributes = result.attributes.attribute;
    const ids = attributes.map(attribute => attribute.id[0]);
    ids.sort(sortArray);

    const util = require("util");
    console.log(util.inspect(ids, {maxArrayLength: null}), ids.length)

  } catch (error) {
    console.log(error);
  }
})();
// const util = require("util");
// console.log(util.inspect(obj, {maxArrayLength: null}))