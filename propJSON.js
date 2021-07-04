const fs = require("fs");
const path = require("path");
const filePath = path.join(
  __dirname,
  "./properties/CB_Anly_TrackingNumberBreakdown.properties"
);
const propertiesToJSON = require("properties-to-json");

(async () => {
  const arr = await require("./xmlkey")(); // an array of parsed XML metadata

  // read properties file and parse to JS
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      throw new Error();
    } else {
      const json = propertiesToJSON(data);
      const obj = {};

      // arr[1,2,3,4,5,10,6] & obj {1: "name", 2: "name2", 3: "name3", 6: "name6", 10: "name10"}
      // expect result: newObj {1: "name", 2: "name2", 3: "name3", 10: "name10", 6: "name6"}

      arr.forEach((val, i) => (obj[val] = json[val]));
      console.log(JSON.stringify(obj));
    }
  });
})();
