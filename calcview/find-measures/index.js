const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray } = require("../../utils/myUtils");
const { xmlFile } = require("./config");
const xml = fs.readFileSync(xmlFile);
/*
Expected calcview input example
    <baseMeasures>
        <measure id="Counter" order="1" aggregationType="sum" measureType="simple">
            <descriptions defaultDescription="Volume" />
            <measureMapping columnObjectName="TU" columnName="Counter" />
        </measure>
    <baseMeasures>
*/

(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const measures = result.baseMeasures.measure;
    const ids = measures.map(measure => measure.id[0]);
    ids.sort(sortArray);

    const util = require("util");
    console.log(util.inspect(ids, {maxArrayLength: null}), ids.length)

  } catch (error) {
    console.log(error);
  }
})();