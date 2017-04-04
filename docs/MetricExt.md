# Bouquet.MetricExt

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**MetricPK**](MetricPK.md) | The object Composite Id (Primary Key) | [optional] 
**accessRights** | [**[AccessRight]**](AccessRight.md) | The ACL for this object | [optional] 
**description** | **String** |  | [optional] 
**expression** | [**Expression**](Expression.md) |  | [optional] 
**definition** | **String** |  | [optional] 
**visible** | **Boolean** |  | [optional] [default to false]
**valueType** | **String** |  | [optional] 
**dynamic** | **Boolean** | indicates if the object is automatically generated. This property can be updated. | [optional] [default to false]
**oid** | **String** | The Object Id | [optional] 
**objectType** | **String** |  | [optional] 
**role** | **String** | The role of the current User (passed in the context) over this object | [optional] 
**vctrl** | **Number** | Internal version control value. (used by optimistic-locking mechanism) | [optional] 
**name** | **String** |  | [optional] 


<a name="ValueTypeEnum"></a>
## Enum: ValueTypeEnum


* `OBJECT` (value: `"OBJECT"`)

* `NUMERIC` (value: `"NUMERIC"`)

* `AGGREGATE` (value: `"AGGREGATE"`)

* `DATE` (value: `"DATE"`)

* `STRING` (value: `"STRING"`)

* `CONDITION` (value: `"CONDITION"`)

* `LINK` (value: `"LINK"`)

* `TABLE` (value: `"TABLE"`)

* `VIEW` (value: `"VIEW"`)

* `DOMAIN` (value: `"DOMAIN"`)

* `OTHER` (value: `"OTHER"`)

* `ERROR` (value: `"ERROR"`)




<a name="RoleEnum"></a>
## Enum: RoleEnum


* `NONE` (value: `"NONE"`)

* `EXECUTE` (value: `"EXECUTE"`)

* `READ` (value: `"READ"`)

* `WRITE` (value: `"WRITE"`)

* `OWNER` (value: `"OWNER"`)




