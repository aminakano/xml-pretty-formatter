const fs = require("fs");
const xml2js = require("xml2js");
const { xmlFile } = require("../config");
const xml = fs.readFileSync(xmlFile);

(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = JSON.stringify(result, null, 4);

    fs.writeFileSync(
      `../../json/${new Date().toISOString().split(".")[0]}.json`,
      json
    );
  } catch (error) {
    console.log(error);
  }
})();
