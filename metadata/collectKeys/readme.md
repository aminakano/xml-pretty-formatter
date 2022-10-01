# XML to JS Array

Extract XML's **Names** and store then in an array.

## How to use

#### 1. In `index.js`

Specify the file path of XML and where the new file gets stored

Input (XML)

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

#### 2. `node index`

Output: `${TypeName}.js`

JavaScript

```javascript
["A", "B", "C", "D", "E", "to_F"];
```