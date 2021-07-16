const fs = require("fs");
const path = require("path");
const propertiesToJSON = require("properties-to-json");
const { propertiesFile, xmlFile } = require("./config");
const filePath = path.join(__dirname, propertiesFile);

const xml2js = require("xml2js");
const xml = fs.readFileSync(xmlFile);

(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, {
      mergeAttrs: false,
    });
    const attr = result.logicalModel.attributes[0].attribute;
    const measure = result.logicalModel.baseMeasures[0].measure;

    // Read properties file and convert to JSON
    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        throw new Error();
      } else {
        const prop = propertiesToJSON(data);
        const fileName = propertiesFile.split("/").slice(-1)[0].split(".")[0];

        // Assign properties' values to xml's defaultDescription
        attr.forEach(
          (val) =>
            (val.descriptions[0].$.defaultDescription = prop[val.$.id] || "")
        );

        // Re-assign the array to the original result object
        result.logicalModel.attributes[0].attribute = attr;

        if (measure) {
          measure.forEach(
            (val) =>
              (val.descriptions[0].$.defaultDescription = prop[val.$.id] || "")
          );
          result.logicalModel.baseMeasures[0].measure = measure;
        }

        // Convert JSON to XML
        const builder = new xml2js.Builder();
        const newXml = builder.buildObject(result);

        // Write a new XML file
        fs.writeFileSync(`./xml/${fileName}.xml`, newXml);
      }
    });
  } catch (error) {
    console.log(error);
  }
})();
