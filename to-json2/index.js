const fs = require("fs");
const path = require("path");
const propertiesToJSON = require("properties-to-json");
const parser = require("properties-file");
const { propertiesFile } = require("./config");
const filePath = path.join(__dirname, propertiesFile);

const xml2js = require("xml2js");
const { xmlFile } = require("./config");
const xml = fs.readFileSync(xmlFile);

const { dateString } = require("../utils/myUtils");
fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
  if (err) {
    throw new Error();
  } else {
    const json = propertiesToJSON(data);
    const obj = {};

    return json;
    // arr.forEach((val, i) => (obj[val] = json[val] || ""));

    // Parse obj to properties string
    // const properties = parser.stringify(obj);

    // Write the string to a properties file
    // fs.writeFileSync(`../properties/${entityName}.properties`, properties);
  }
});

(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, {
      mergeAttrs: true,
    });
    const json = await result.logicalModel.attributes[0].attribute;
    // read properties file and convert to JSON
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        throw new Error();
      } else {
        const prop = propertiesToJSON(data);

        for (let i in json) {
          const id = json[i].id[0];
          json[i].descriptions[0].defaultDescription[0] = prop[id] || "";
        }
        // fs.writeFileSync(`./${dateString}.json`, json);
        // console.log(json);
        // const stringified = JSON.stringify(json);
        result.logicalModel.attributes[0].attribute = json;
        const builder = new xml2js.Builder();
        const newXml = builder.buildObject(result);
        console.log(newXml);
      }
    });
  } catch (error) {
    console.log(error);
  }
})();
