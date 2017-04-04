# Bouquet.Relation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**RelationPK**](RelationPK.md) | The object Composite Id (Primary Key) | [optional] 
**accessRights** | [**[AccessRight]**](AccessRight.md) | The ACL for this object | [optional] 
**description** | **String** |  | [optional] 
**leftId** | [**DomainPK**](DomainPK.md) |  | [optional] 
**leftCardinality** | **String** |  | [optional] 
**rightId** | [**DomainPK**](DomainPK.md) |  | [optional] 
**rightCardinality** | **String** |  | [optional] 
**leftName** | **String** |  | [optional] 
**rightName** | **String** |  | [optional] 
**joinExpression** | [**Expression**](Expression.md) |  | [optional] 
**dynamic** | **Boolean** | indicates if the object is automatically generated. This property can be updated. | [optional] [default to false]
**oid** | **String** | The Object Id | [optional] 
**objectType** | **String** |  | [optional] 
**role** | **String** | The role of the current User (passed in the context) over this object | [optional] 
**vctrl** | **Number** | Internal version control value. (used by optimistic-locking mechanism) | [optional] 
**name** | **String** |  | [optional] 


<a name="LeftCardinalityEnum"></a>
## Enum: LeftCardinalityEnum


* `ZERO_OR_ONE` (value: `"ZERO_OR_ONE"`)

* `ONE` (value: `"ONE"`)

* `MANY` (value: `"MANY"`)




<a name="RightCardinalityEnum"></a>
## Enum: RightCardinalityEnum


* `ZERO_OR_ONE` (value: `"ZERO_OR_ONE"`)

* `ONE` (value: `"ONE"`)

* `MANY` (value: `"MANY"`)




<a name="RoleEnum"></a>
## Enum: RoleEnum


* `NONE` (value: `"NONE"`)

* `EXECUTE` (value: `"EXECUTE"`)

* `READ` (value: `"READ"`)

* `WRITE` (value: `"WRITE"`)

* `OWNER` (value: `"OWNER"`)




