# Bouquet.ProjectAnalysisJob

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**ProjectAnalysisJobPK**](ProjectAnalysisJobPK.md) | The object Composite Id (Primary Key) | [optional] 
**accessRights** | [**[AccessRight]**](AccessRight.md) | The ACL for this object | [optional] 
**status** | **String** |  | [optional] 
**error** | [**Error**](Error.md) |  | [optional] 
**statistics** | [**Statistics**](Statistics.md) |  | [optional] 
**resultsSize** | **Number** |  | [optional] 
**temporary** | **Boolean** |  | [optional] [default to false]
**autoRun** | **Boolean** |  | [optional] [default to false]
**creationTime** | **Number** |  | [optional] 
**domains** | [**[DomainPK]**](DomainPK.md) |  | [optional] 
**dimensions** | [**[DimensionPK]**](DimensionPK.md) |  | [optional] 
**metrics** | [**[MetricPK]**](MetricPK.md) |  | [optional] 
**metricList** | [**[Metric]**](Metric.md) |  | [optional] 
**facets** | [**[FacetExpression]**](FacetExpression.md) |  | [optional] 
**rollups** | [**[RollUp]**](RollUp.md) | compute rollup on the given dimensions. It is a list of indices that references the dimension in either dimensions or facets list. In order to compute a grand-total, use id&#x3D;-1 (it should be the first in the list). If several levels are defined, the analysis will compute sub-total for: (level0), then (level0,level1)... If a rollup is specified, the resulting DataTable will have a new column &#39;GROUPING_ID&#39; in first position that will return 0 if the row is the grand-total, 1 for the first level sub-total, ... and null if it is not a rollup row. | [optional] 
**selection** | [**FacetSelection**](FacetSelection.md) |  | [optional] 
**orderBy** | [**[OrderBy]**](OrderBy.md) |  | [optional] 
**offset** | **Number** |  | [optional] 
**limit** | **Number** |  | [optional] 
**beyondLimit** | [**[Index]**](Index.md) |  | [optional] 
**optionKeys** | **{String: Object}** |  | [optional] 
**results** | [**DataTable**](DataTable.md) |  | [optional] 
**oid** | **String** | The Object Id | [optional] 
**objectType** | **String** |  | [optional] 
**role** | **String** | The role of the current User (passed in the context) over this object | [optional] 
**vctrl** | **Number** | Internal version control value. (used by optimistic-locking mechanism) | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `PENDING` (value: `"PENDING"`)

* `RUNNING` (value: `"RUNNING"`)

* `DONE` (value: `"DONE"`)




<a name="RoleEnum"></a>
## Enum: RoleEnum


* `NONE` (value: `"NONE"`)

* `EXECUTE` (value: `"EXECUTE"`)

* `READ` (value: `"READ"`)

* `WRITE` (value: `"WRITE"`)

* `OWNER` (value: `"OWNER"`)




