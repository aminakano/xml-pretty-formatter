const fs = require("fs");
const xml2js = require("xml2js");
const { sortArray } = require("../utils/myUtils");
const { xmlFile } = require("../config");
const xml = fs.readFileSync(xmlFile);
(async (prop) => {
  try {
    const result = await xml2js.parseStringPromise(xml, { mergeAttrs: true });
    const json = result.EntityType.Property;

    const arr = [];
    json.forEach((val) => arr.push(val.Name[0]));
    arr.sort(sortArray);

    const findProp = (entityArr) => entityArr.find((elem) => elem === prop);

    const navProp = result.EntityType.NavigationProperty;
    if (navProp) {
      const navPropArr = [];
      navProp.forEach((val) => navPropArr.push(val.Name[0]));
      navPropArr.sort(sortArray);
      const combinedArr = arr.concat(navPropArr);
      findProp(combinedArr)
        ? console.log(`${prop} is found`)
        : console.log("not found");
    } else {
      findProp(arr)
        ? console.log(`${prop} is found`)
        : console.log("not found");
    }
  } catch (error) {
    console.log(error);
  }
})("TrackingNumber");
