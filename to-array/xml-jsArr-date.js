const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray, dateString } = require("../utils/myUtils");
const { xmlFile } = require("../config");
const xml = fs.readFileSync(xmlFile);
(async () => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });

    const json = result.EntityType.Property;
    const arr = [];
    json.forEach((val) => arr.push(val.Name[0]));
    arr.sort(sortArray);

    const writeJS = (array) => {
      fs.writeFileSync(`../js/${dateString}.js`, JSON.stringify(array));
    };

    const navProp = result.EntityType.NavigationProperty;
    if (navProp) {
      const navPropArr = [];
      navProp.forEach((val) => navPropArr.push(val.Name[0]));
      navPropArr.sort(sortArray);
      const combinedArr = arr.concat(navPropArr);
      writeJS(combinedArr);
    } else writeJS(arr);
  } catch (error) {
    console.log(error);
  }
})();
