# XML to JSON to XML

Convert XML (SAP Calculation view/>logicalModel) to JSON, update `defaultDescription` attribute based on properties file, convert it back to XML and write a new file

XML

```xml
<logicalModel id="">
	<attributes>
		<attribute id="A" order="1" displayAttribute="false" attributeHierarchyActive="false">
			<descriptions defaultDescription="A_Description"/>
			<keyMapping columnObjectName="Pre_Aggregation" columnName="A"/>
		</attribute>
		<attribute id="B" order="2" displayAttribute="false" attributeHierarchyActive="false">
			<descriptions defaultDescription="B_Description"/>
			<keyMapping columnObjectName="Pre_Aggregation" columnName="B"/>
		</attribute>
		<attribute id="C" order="3" displayAttribute="false" attributeHierarchyActive="false">
			<descriptions defaultDescription="C_Description"/>
			<keyMapping columnObjectName="Pre_Aggregation" columnName="C"/>
		</attribute>
	</attributes>
	<calculatedAttributes>
	</calculatedAttributes>
	<baseMeasures>
	</baseMeasures>
	<calculatedMeasures/>
	<restrictedMeasures/>
	<localDimensions/>
</logicalModel>
```

Properties

```properties
A=A's Description
B=B's Description
C=C's Description
```

Converted XML

```xml
<logicalModel id="">
	<attributes>
		<attribute id="A" order="1" displayAttribute="false" attributeHierarchyActive="false">
			<descriptions defaultDescription="A's Description"/>
			<keyMapping columnObjectName="Pre_Aggregation" columnName="A"/>
		</attribute>
		<attribute id="B" order="2" displayAttribute="false" attributeHierarchyActive="false">
			<descriptions defaultDescription="B's Description"/>
			<keyMapping columnObjectName="Pre_Aggregation" columnName="B"/>
		</attribute>
		<attribute id="C" order="3" displayAttribute="false" attributeHierarchyActive="false">
			<descriptions defaultDescription="C's Description"/>
			<keyMapping columnObjectName="Pre_Aggregation" columnName="C"/>
		</attribute>
	</attributes>
	<calculatedAttributes>
	</calculatedAttributes>
	<baseMeasures>
	</baseMeasures>
	<calculatedMeasures/>
	<restrictedMeasures/>
	<localDimensions/>
</logicalModel>
```

## How to use

#### 1. In `index.js`

Specify the file path of XML & properties and where the new file gets stored

#### 2. `node index`

Output: `${propertiesFileName}.xml`
