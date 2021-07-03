const fs = require("fs");
const path = require("path");
const filePath = path.join(
  __dirname,
  "CB_Anly_TrackingNumberBreakdown.properties"
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

      const myObj = {
        Amount: "Net Charge",
        AmountPerTU: "Net Charge per TU",
        AmountPerWeight: "Amount per Weight",
        AmountPerWeightWithUnit: "Amount per Weight",
        Amount_Gross: "Gross Charge",
        BillingType: "Billing Type",
        BillingType_Description: "Billing Type",
      };

      const obj = {};

      // arr[1,2,3,4,5,10,6] & obj {1: "name", 2: "name2", 3: "name3", 6: "name6", 10: "name10"}
      // expect result: newObj {1: "name", 2: "name2", 3: "name3", 10: "name10", 6: "name6"}

      // const keyVal = Object.entries(myObj);
      // console.log(Object.keys(myObj));
      // console.log(Object.values(myObj));

      for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = json[arr[i]];
        // console.log(keyVal[i][1], 51);
      }
      console.log(JSON.stringify(obj));
      console.log(`obj: ${obj}`);
      // maybe create an array of keys for the object, then compare both arrays, then compare, then create an object?

      // make the array from the metadata to Set?
      // array -> if the object has the same key, add its value to a new object
      // const keyArrFromObj = Object.keys(myObj);

      // console.log(`arr: ${arr}`);
      // console.log("-------------");
      // console.log(`keyArrFromObj: ${keyArrFromObj}`);
    }
  });
})();
