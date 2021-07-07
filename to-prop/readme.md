# XML to Properties

Convert XML to properties, compare values with an existing properties file and create a new file

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
</EntityType>
```

Properties (existing file)

```properties
A=Description A
B=Description B
D=Description D
E=Description E
```

Properties (new file)

```properties
A=Description A
B=Description B
C=
D=Description D
```

## How to use

#### 1. In `index.js` and `getKeys.js`

Specify the file paths of XML&Properties and where the new file gets stored (index.js)

#### 2. `node index`

Output: `${TypeName}.properties`
