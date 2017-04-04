# Bouquet.Domain

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**DomainPK**](DomainPK.md) | The object Composite Id (Primary Key) | [optional] 
**accessRights** | [**[AccessRight]**](AccessRight.md) | The ACL for this object | [optional] 
**description** | **String** |  | [optional] 
**subject** | [**Expression**](Expression.md) |  | [optional] 
**internalVersion** | **Number** |  | [optional] 
**options** | [**DomainOption**](DomainOption.md) |  | [optional] 
**metrics** | [**[Metric]**](Metric.md) |  | [optional] 
**dimensions** | [**[Dimension]**](Dimension.md) |  | [optional] 
**dynamic** | **Boolean** | indicates if the object is automatically generated. This property can be updated. | [optional] [default to false]
**oid** | **String** | The Object Id | [optional] 
**objectType** | **String** |  | [optional] 
**role** | **String** | The role of the current User (passed in the context) over this object | [optional] 
**vctrl** | **Number** | Internal version control value. (used by optimistic-locking mechanism) | [optional] 
**children** | **[String]** |  | [optional] 
**name** | **String** |  | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `NONE` (value: `"NONE"`)

* `EXECUTE` (value: `"EXECUTE"`)

* `READ` (value: `"READ"`)

* `WRITE` (value: `"WRITE"`)

* `OWNER` (value: `"OWNER"`)




