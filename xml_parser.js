const fs = require("fs");
const xml2js = require("xml2js");

const xml = fs.readFileSync("metadata.xml");
(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = JSON.stringify(result, null, 4);

    fs.writeFileSync("xmltojson.json", json);
  } catch (error) {
    console.log(error);
  }
})();
