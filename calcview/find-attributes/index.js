const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray } = require("../../utils/myUtils");
const { xmlFile } = require("./config");
const xml = fs.readFileSync(xmlFile);

/*
Expected calcview input example
	<attributes>
		<attribute id="AccessPointPickup" order="1" displayAttribute="false" attributeHierarchyActive="false">
			<descriptions defaultDescription="Access Point Pick-Up" />
			<keyMapping columnObjectName="TU" columnName="AccessPointPickup" />
		</attribute>
	</attributes>
*/
(async () => {
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