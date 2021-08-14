const fs = require("fs");
const xml2js = require("xml2js");
const { xmlFile2 } = require("../config");
const xml = fs.readFileSync(xmlFile2);

(async (entity, searchStr) => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const trimmed =
      result["edmx:Edmx"]["edmx:DataServices"][0]["Schema"][0]["EntityType"];

    const filtered = trimmed.filter((elem) => elem.Name[0] === entity);
    const props = filtered[0].Property;

    props.find((elem) => elem.Name[0] === searchStr)
      ? console.log(`${searchStr} is found`)
      : console.log("not found");
  } catch (error) {
    console.log(error);
  }
})("Vis_Anly_TU_KeysType", "Origin_Address1");
