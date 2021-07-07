# XML to JS Array

Extract XML's **Names** and store then in an array.

XML

```xml
<EntityType Name="TypeName">
  <Key>
    <PropertyRef Name="Id"/>
  </Key>
  <Property Name="A" Type="Edm.String" MaxLength="255"/>
  <Property Name="B" Type="Edm.String" MaxLength="255"/>
  <Property Name="C" Type="Edm.String" MaxLength="255"/>
  <Property Name="D" Type="Edm.String" MaxLength="255"/>
  <Property Name="E" Type="Edm.String" MaxLength="255"/>
  <NavigationProperty Name="to_F"/>
</EntityType>
```

JavaScript

```javascript
["A", "B", "C", "D", "E", "to_F"];
```

## How to use

#### 1. In `index.js` or `xml-jsArr-date.js`

Specify the file path of XML and where the new file gets stored

#### 2-a. `node index`

Output: `${TypeName}.js`

#### 2-b. `node xml-jsArr-date`

Output: `${DateTime}.js` // e.g. 2021-07-06-07:34:44.js
