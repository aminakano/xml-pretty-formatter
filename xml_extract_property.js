const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray } = require("./utils/myUtils");

const xml = fs.readFileSync("./xml/metadata.xml");
(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });

    const json = result.EntityType.Property;
    const arr = [];
    json.forEach((val) => arr.push(val.Name[0]));
    arr.sort(sortArray);

    fs.writeFileSync(
      `${new Date().toISOString().split(".")[0]}.json`,
      JSON.stringify(arr)
    );
  } catch (error) {
    console.log(error);
  }
})();
