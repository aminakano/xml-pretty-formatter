# XML to JSON

Convert XML to JSON and write a new file

XML

```xml
<EntityType Name="TypeName">
  <Key>
    <PropertyRef Name="Id"/>
  </Key>
  <Property Name="A" Type="Edm.String" MaxLength="255"/>
  <Property Name="B" Type="Edm.String" MaxLength="255"/>
  <Property Name="C" Type="Edm.String" MaxLength="255"/>
  <NavigationProperty Name="to_D"/>
</EntityType>
```

JSON

```json
{
  "EntityType": {
    "Name": ["TypeName"],
    "Key": [
      {
        "PropertyRef": [
          {
            "Name": ["Id"]
          }
        ]
      }
    ],
    "Property": [
      {
        "Name": ["A"],
        "Type": ["Edm.String"],
        "MaxLength": ["255"]
      },
      {
        "Name": ["B"],
        "Type": ["Edm.String"],
        "MaxLength": ["255"]
      },
      {
        "Name": ["C"],
        "Type": ["Edm.String"],
        "MaxLength": ["255"]
      }
    ],
    "NavigationProperty": [
      {
        "Name": ["to_D"],
        "Type": ["Edm.String"],
        "MaxLength": ["255"]
      }
    ]
  }
}
```

## How to use

#### 1. In `index.js`

Specify the file path of XML and where the new file gets stored

#### 2. `node index`

Output: `${DateTime}.json` // e.g. 2021-07-06-07:34:44.json
