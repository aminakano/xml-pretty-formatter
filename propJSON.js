const fs = require("fs");
const path = require("path");
const propertiesToJSON = require("properties-to-json");
const parser = require("properties-file");
const { propertiesFile } = require("./config");
const filePath = path.join(__dirname, propertiesFile);

(async () => {
  const { arr, entityName } = await require("./xmlkey")(); // an array of parsed XML metadata
  // read properties file and parse to JS
  fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      throw new Error();
    } else {
      const json = propertiesToJSON(data);
      const obj = {};

      // ---------------------------------------------------------
      // Loop through the array of metadata's keys (const arr) and find if there are the same keys in the properties files object (const json)
      // If there are, push the keys from the array and the values to a new object (const obj)
      // Otherwise, the keys and empty strings

      // Example:
      // arr [1,2,3,4,5,6,10,12] & json {1: "name", 2: "name2", 3: "name3", 6: "name6", 10: "name10"}
      // expected result: obj {1: "name", 2: "name2", 3: "name3", 4: "", 5: "", 6: "name6", 10: "name10", 12: ""}
      // ---------------------------------------------------------
      arr.forEach((val, i) => (obj[val] = json[val] || ""));

      // Parse obj to properties string
      const properties = parser.stringify(obj);

      // Write the string to a properties file
      fs.writeFileSync(`./properties/${entityName}.properties`, properties);
    }
  });
})();
