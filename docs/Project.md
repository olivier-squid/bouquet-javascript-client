# Bouquet.Project

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**ProjectPK**](ProjectPK.md) | The object Composite Id (Primary Key) | [optional] 
**accessRights** | [**[AccessRight]**](AccessRight.md) | The ACL for this object | [optional] 
**description** | **String** |  | [optional] 
**dbUrl** | **String** | The DataBase JDBC URL (requires WRITE role to view) | [optional] 
**dbUser** | **String** | The DataBase JDBC user (requires WRITE role to view) | [optional] 
**dbPassword** | **String** | The DataBase JDBC password (write-only) | [optional] 
**dbSchemas** | **[String]** | The DataBase Schemas enabled (requires WRITE role). The list of available discovered Schemas can be found via the {projectId}/schemas-suggestion method | [optional] 
**config** | **String** | Deprecated : An optional configuration (json) object | [optional] 
**dbPasswordLength** | **Number** | The DataBase JDBC password length | [optional] 
**dbVendorId** | **String** | The DataBase vendor ID to use for connecting | [optional] 
**dbArguments** | **{String: String}** | The DataBase JDBC URL arguments | [optional] 
**internalVersion** | **Number** |  | [optional] 
**domains** | [**[Domain]**](Domain.md) |  | [optional] 
**relations** | [**[Relation]**](Relation.md) |  | [optional] 
**bookmarks** | [**[Bookmark]**](Bookmark.md) |  | [optional] 
**usingInMemExt** | **String** | If the Project is using In Memory Extension | [optional] 
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




