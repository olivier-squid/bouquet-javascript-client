# Bouquet.AnalyticsApi

All URIs are relative to *https://localhost/dev/v4.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelQuery**](AnalyticsApi.md#cancelQuery) | **GET** /status/{QUERYID}/cancel | cancel the execution of the analysis identified by its QueryID
[**createBookmark**](AnalyticsApi.md#createBookmark) | **POST** /analytics/{REFERENCE} | create a new bookmark
[**createBookmarkFromQuery**](AnalyticsApi.md#createBookmarkFromQuery) | **GET** /analytics/{REFERENCE}/bookmark | Create a new bookmark based on a query
[**exportAnalysis**](AnalyticsApi.md#exportAnalysis) | **GET** /analytics/{REFERENCE}/export/{filename} | Export an analysis results
[**getFacet**](AnalyticsApi.md#getFacet) | **GET** /analytics/{REFERENCE}/facets/{FACETID} | Get facet content using the default BB selection
[**getItem**](AnalyticsApi.md#getItem) | **GET** /analytics/{REFERENCE} | Get an item, can be a Domain or a Bookmark
[**getStatus**](AnalyticsApi.md#getStatus) | **GET** /status/{QUERYID} | get the ongoing status of the analysis identified by its QueryID
[**listContent**](AnalyticsApi.md#listContent) | **GET** /analytics | List available content
[**postAnalysis**](AnalyticsApi.md#postAnalysis) | **POST** /analytics/{REFERENCE}/query | Run a new Analysis based on the Bookmark scope
[**runAnalysis**](AnalyticsApi.md#runAnalysis) | **GET** /analytics/{REFERENCE}/query | Compute an analysis for the subject
[**scopeAnalysis**](AnalyticsApi.md#scopeAnalysis) | **GET** /analytics/{REFERENCE}/scope | Provide information about the expressions available in the bookmark scope
[**viewAnalysis**](AnalyticsApi.md#viewAnalysis) | **GET** /analytics/{REFERENCE}/view | Generate a dataviz specs from a query


<a name="cancelQuery"></a>
# **cancelQuery**
> &#39;Boolean&#39; cancelQuery(QUERYID)

cancel the execution of the analysis identified by its QueryID



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var QUERYID = "QUERYID_example"; // String | this is the AnalysisQuery QueryID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelQuery(QUERYID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **QUERYID** | **String**| this is the AnalysisQuery QueryID | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createBookmark"></a>
# **createBookmark**
> Bookmark createBookmark(body, REFERENCE, name, opts)

create a new bookmark



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var body = new Bouquet.AnalyticsQuery(); // AnalyticsQuery | the analysis query definition

var REFERENCE = "REFERENCE_example"; // String | 

var name = "name_example"; // String | the new bookmark name

var opts = { 
  'parent': "parent_example" // String | the new bookmark folder, can be /MYBOOKMARKS, /MYBOOKMARKS/any/folders or /SHARED/any/folders
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBookmark(body, REFERENCE, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AnalyticsQuery**](AnalyticsQuery.md)| the analysis query definition | 
 **REFERENCE** | **String**|  | 
 **name** | **String**| the new bookmark name | 
 **parent** | **String**| the new bookmark folder, can be /MYBOOKMARKS, /MYBOOKMARKS/any/folders or /SHARED/any/folders | [optional] 

### Return type

[**Bookmark**](Bookmark.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createBookmarkFromQuery"></a>
# **createBookmarkFromQuery**
> Bookmark createBookmarkFromQuery(REFERENCE, name, opts)

Create a new bookmark based on a query



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var REFERENCE = "REFERENCE_example"; // String | 

var name = "name_example"; // String | the new bookmark name

var opts = { 
  'parent': "parent_example", // String | the new bookmark folder, can be /MYBOOKMARKS, /MYBOOKMARKS/any/folders or /SHARED/any/folders
  'groupBy': ["groupBy_example"], // [String] | Define the facets to agroup by the results. Facet can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'metrics': ["metrics_example"], // [String] | Define the metrics to compute. Metric can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'filters': ["filters_example"], // [String] | Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing.
  'period': "period_example", // String | the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...).
  'timeframe': ["timeframe_example"], // [String] | the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR
  'compareTo': ["compareTo_example"], // [String] | Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR
  'orderBy': ["orderBy_example"], // [String] | Define how to sort the results. You can specify a colun either by it's index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query).
  'rollup': ["rollup_example"], // [String] | Optionaly you can compute rollup for any groupBy column. It must be a valid indexe of a groupBy column or the expression FIRST(N) or LAST(N) to set the rollup position. Index starts at zero. Special value of -1 can be used to compute a grand total.
  'limit': 789, // Number | limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults.
  'offset': 789, // Number | offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex.
  'beyondLimit': ["beyondLimit_example"], // [String] | exclude some dimensions from the limit
  'maxResults': 56, // Number | Define the pagination size.
  'startIndex': 56, // Number | Pagination starting index. Index is zero-based, so use the #count of the last row to view the next page.
  'lazy': "false", // String | if true, get the analysis only if already in cache, else throw a NotInCacheException; if noError returns a null result if the analysis is not in cache ; else regular analysis
  'data': "data_example", // String | define the analysis data output format.
  'applyFormatting': true, // Boolean | apply formatting to the output data
  'style': "HUMAN", // String | define the response style. If HUMAN, the API will try to use natural reference for objects, like 'My First Project', 'Account', 'Total Sales'... If MACHINE the API will use canonical references that are invariant, e.g. @'5603ca63c531d744b50823a3bis'. If LEGACY the API will also provide internal compound key to lookup objects in the management API.
  'envelope': "envelope_example", // String | define the result envelope
  'timeout': 56, // Number | response timeout in milliseconds. If no timeout set, the method will return according to current job status.
  'state': "state_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBookmarkFromQuery(REFERENCE, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REFERENCE** | **String**|  | 
 **name** | **String**| the new bookmark name | 
 **parent** | **String**| the new bookmark folder, can be /MYBOOKMARKS, /MYBOOKMARKS/any/folders or /SHARED/any/folders | [optional] 
 **groupBy** | [**[String]**](String.md)| Define the facets to agroup by the results. Facet can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **metrics** | [**[String]**](String.md)| Define the metrics to compute. Metric can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **filters** | [**[String]**](String.md)| Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing. | [optional] 
 **period** | **String**| the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...). | [optional] 
 **timeframe** | [**[String]**](String.md)| the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR | [optional] 
 **compareTo** | [**[String]**](String.md)| Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR | [optional] 
 **orderBy** | [**[String]**](String.md)| Define how to sort the results. You can specify a colun either by it&#39;s index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query). | [optional] 
 **rollup** | [**[String]**](String.md)| Optionaly you can compute rollup for any groupBy column. It must be a valid indexe of a groupBy column or the expression FIRST(N) or LAST(N) to set the rollup position. Index starts at zero. Special value of -1 can be used to compute a grand total. | [optional] 
 **limit** | **Number**| limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults. | [optional] 
 **offset** | **Number**| offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex. | [optional] 
 **beyondLimit** | [**[String]**](String.md)| exclude some dimensions from the limit | [optional] 
 **maxResults** | **Number**| Define the pagination size. | [optional] 
 **startIndex** | **Number**| Pagination starting index. Index is zero-based, so use the #count of the last row to view the next page. | [optional] 
 **lazy** | **String**| if true, get the analysis only if already in cache, else throw a NotInCacheException; if noError returns a null result if the analysis is not in cache ; else regular analysis | [optional] [default to false]
 **data** | **String**| define the analysis data output format. | [optional] 
 **applyFormatting** | **Boolean**| apply formatting to the output data | [optional] 
 **style** | **String**| define the response style. If HUMAN, the API will try to use natural reference for objects, like &#39;My First Project&#39;, &#39;Account&#39;, &#39;Total Sales&#39;... If MACHINE the API will use canonical references that are invariant, e.g. @&#39;5603ca63c531d744b50823a3bis&#39;. If LEGACY the API will also provide internal compound key to lookup objects in the management API. | [optional] [default to HUMAN]
 **envelope** | **String**| define the result envelope | [optional] 
 **timeout** | **Number**| response timeout in milliseconds. If no timeout set, the method will return according to current job status. | [optional] 
 **state** | **String**|  | [optional] 

### Return type

[**Bookmark**](Bookmark.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="exportAnalysis"></a>
# **exportAnalysis**
> exportAnalysis(REFERENCE, filename, opts)

Export an analysis results



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var REFERENCE = "REFERENCE_example"; // String | 

var filename = "filename_example"; // String | 

var opts = { 
  'groupBy': ["groupBy_example"], // [String] | Define the facets to agroup by the results. Facet can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'metrics': ["metrics_example"], // [String] | Define the metrics to compute. Metric can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'filters': ["filters_example"], // [String] | Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing.
  'period': "period_example", // String | the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...).
  'timeframe': ["timeframe_example"], // [String] | the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR
  'compareTo': ["compareTo_example"], // [String] | Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR
  'orderBy': ["orderBy_example"], // [String] | Define how to sort the results. You can specify a colun either by it's index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query).
  'rollup': ["rollup_example"], // [String] | Optionaly you can compute rollup for any groupBy column. It must be a valid indexe of a groupBy column or the expression FIRST(N) or LAST(N) to set the rollup position. Index starts at zero. Special value of -1 can be used to compute a grand total.
  'limit': 789, // Number | limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults.
  'offset': 789, // Number | offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex.
  'beyondLimit': ["beyondLimit_example"] // [String] | exclude some dimensions from the limit
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.exportAnalysis(REFERENCE, filename, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REFERENCE** | **String**|  | 
 **filename** | **String**|  | 
 **groupBy** | [**[String]**](String.md)| Define the facets to agroup by the results. Facet can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **metrics** | [**[String]**](String.md)| Define the metrics to compute. Metric can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **filters** | [**[String]**](String.md)| Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing. | [optional] 
 **period** | **String**| the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...). | [optional] 
 **timeframe** | [**[String]**](String.md)| the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR | [optional] 
 **compareTo** | [**[String]**](String.md)| Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR | [optional] 
 **orderBy** | [**[String]**](String.md)| Define how to sort the results. You can specify a colun either by it&#39;s index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query). | [optional] 
 **rollup** | [**[String]**](String.md)| Optionaly you can compute rollup for any groupBy column. It must be a valid indexe of a groupBy column or the expression FIRST(N) or LAST(N) to set the rollup position. Index starts at zero. Special value of -1 can be used to compute a grand total. | [optional] 
 **limit** | **Number**| limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults. | [optional] 
 **offset** | **Number**| offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex. | [optional] 
 **beyondLimit** | [**[String]**](String.md)| exclude some dimensions from the limit | [optional] 

### Return type

null (empty response body)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFacet"></a>
# **getFacet**
> Facet getFacet(REFERENCE, FACETID, opts)

Get facet content using the default BB selection



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var REFERENCE = "REFERENCE_example"; // String | 

var FACETID = "FACETID_example"; // String | 

var opts = { 
  'q': "q_example", // String | search the facet values using a list of tokens
  'filters': ["filters_example"], // [String] | Define the filters to apply to results. A filter must be a valid conditional expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'maxResults': 56, // Number | maximum number of items to return per page
  'startIndex': 56, // Number | index of the first item to start the page
  'timeout': 56 // Number | optional timeout in milliseconds
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFacet(REFERENCE, FACETID, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REFERENCE** | **String**|  | 
 **FACETID** | **String**|  | 
 **q** | **String**| search the facet values using a list of tokens | [optional] 
 **filters** | [**[String]**](String.md)| Define the filters to apply to results. A filter must be a valid conditional expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **maxResults** | **Number**| maximum number of items to return per page | [optional] 
 **startIndex** | **Number**| index of the first item to start the page | [optional] 
 **timeout** | **Number**| optional timeout in milliseconds | [optional] 

### Return type

[**Facet**](Facet.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getItem"></a>
# **getItem**
> Object getItem(REFERENCE)

Get an item, can be a Domain or a Bookmark



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var REFERENCE = "REFERENCE_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getItem(REFERENCE, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REFERENCE** | **String**|  | 

### Return type

**Object**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getStatus"></a>
# **getStatus**
> [QueryWorkerJobStatus] getStatus(QUERYID)

get the ongoing status of the analysis identified by its QueryID



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var QUERYID = "QUERYID_example"; // String | this is the AnalysisQuery QueryID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getStatus(QUERYID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **QUERYID** | **String**| this is the AnalysisQuery QueryID | 

### Return type

[**[QueryWorkerJobStatus]**](QueryWorkerJobStatus.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listContent"></a>
# **listContent**
> listContent(opts)

List available content

It provides a comprehensive view including projects, domains, folders and bookmarks.You can use it to navigate the entire available content, or access a specific content by defining the parent parameter.The root parents are /PROJECTS for listing projects and domains, /MYBOOKMARKS to list the user bookmarks and folders, and /SHARED to list the shared bookmarks and folders.By default it lists ony the content directly under the parent, but you can set the hierarchy parameter to view content recursively.

### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var opts = { 
  'parent': "parent_example", // String | filter the content under the parent path
  'q': "q_example", // String | filter the content by name; q can be a multi-token search string separated by comma
  'hierarchy': "hierarchy_example", // String | define the hierarchy mode. FLAT mode return the hierarchy as a flat list, whereas TREE returns it as a folded structure (NIY)
  'visibility': "VISIBLE", // String | filter the result depending on the object visibility
  'style': "HUMAN", // String | define the result style. If HUMAN, the API will try to use natural reference for objects, like 'My First Project', 'Account', 'Total Sales'... If ROBOT the API will use canonical references that are invariant, e.g. @'5603ca63c531d744b50823a3bis'. If LEGACY the API will also provide internal compound key to lookup objects in the management API.
  'envelope': "envelope_example" // String | define the result envelope
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.listContent(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| filter the content under the parent path | [optional] 
 **q** | **String**| filter the content by name; q can be a multi-token search string separated by comma | [optional] 
 **hierarchy** | **String**| define the hierarchy mode. FLAT mode return the hierarchy as a flat list, whereas TREE returns it as a folded structure (NIY) | [optional] 
 **visibility** | **String**| filter the result depending on the object visibility | [optional] [default to VISIBLE]
 **style** | **String**| define the result style. If HUMAN, the API will try to use natural reference for objects, like &#39;My First Project&#39;, &#39;Account&#39;, &#39;Total Sales&#39;... If ROBOT the API will use canonical references that are invariant, e.g. @&#39;5603ca63c531d744b50823a3bis&#39;. If LEGACY the API will also provide internal compound key to lookup objects in the management API. | [optional] [default to HUMAN]
 **envelope** | **String**| define the result envelope | [optional] 

### Return type

null (empty response body)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postAnalysis"></a>
# **postAnalysis**
> postAnalysis(body, REFERENCE, opts)

Run a new Analysis based on the Bookmark scope



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var body = new Bouquet.AnalyticsQuery(); // AnalyticsQuery | the analysis query definition

var REFERENCE = "REFERENCE_example"; // String | 

var opts = { 
  'data': "data_example", // String | define the analysis data format.
  'applyFormatting': true, // Boolean | apply formatting to the output data
  'envelope': "envelope_example", // String | define the result envelope
  'timeout': 56, // Number | response timeout in milliseconds. If no timeout set, the method will return according to current job status.
  'state': "state_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postAnalysis(body, REFERENCE, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AnalyticsQuery**](AnalyticsQuery.md)| the analysis query definition | 
 **REFERENCE** | **String**|  | 
 **data** | **String**| define the analysis data format. | [optional] 
 **applyFormatting** | **Boolean**| apply formatting to the output data | [optional] 
 **envelope** | **String**| define the result envelope | [optional] 
 **timeout** | **Number**| response timeout in milliseconds. If no timeout set, the method will return according to current job status. | [optional] 
 **state** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="runAnalysis"></a>
# **runAnalysis**
> runAnalysis(REFERENCE, opts)

Compute an analysis for the subject



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var REFERENCE = "REFERENCE_example"; // String | 

var opts = { 
  'groupBy': ["groupBy_example"], // [String] | Define the facets to agroup by the results. Facet can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'metrics': ["metrics_example"], // [String] | Define the metrics to compute. Metric can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'filters': ["filters_example"], // [String] | Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing.
  'period': "period_example", // String | the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...).
  'timeframe': ["timeframe_example"], // [String] | the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR
  'compareTo': ["compareTo_example"], // [String] | Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR
  'orderBy': ["orderBy_example"], // [String] | Define how to sort the results. You can specify a colun either by it's index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query).
  'rollup': ["rollup_example"], // [String] | Optionaly you can compute rollup for any groupBy column. It must be a valid indexe of a groupBy column or the expression FIRST(N) or LAST(N) to set the rollup position. Index starts at zero. Special value of -1 can be used to compute a grand total.
  'limit': 789, // Number | limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults.
  'offset': 789, // Number | offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex.
  'beyondLimit': ["beyondLimit_example"], // [String] | exclude some dimensions from the limit
  'maxResults': 56, // Number | Define the pagination size.
  'startIndex': 56, // Number | Pagination starting index. Index is zero-based, so use the #count of the last row to view the next page.
  'lazy': "false", // String | if true, get the analysis only if already in cache, else throw a NotInCacheException; if noError returns a null result if the analysis is not in cache ; else regular analysis
  'data': "data_example", // String | define the analysis data output format.
  'applyFormatting': true, // Boolean | apply formatting to the output data
  'style': "HUMAN", // String | define the response style. If HUMAN, the API will try to use natural reference for objects, like 'My First Project', 'Account', 'Total Sales'... If MACHINE the API will use canonical references that are invariant, e.g. @'5603ca63c531d744b50823a3bis'. If LEGACY the API will also provide internal compound key to lookup objects in the management API.
  'envelope': "envelope_example", // String | define the result envelope
  'timeout': 56, // Number | response timeout in milliseconds. If no timeout set, the method will return according to current job status.
  'state': "state_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.runAnalysis(REFERENCE, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REFERENCE** | **String**|  | 
 **groupBy** | [**[String]**](String.md)| Define the facets to agroup by the results. Facet can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **metrics** | [**[String]**](String.md)| Define the metrics to compute. Metric can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **filters** | [**[String]**](String.md)| Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing. | [optional] 
 **period** | **String**| the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...). | [optional] 
 **timeframe** | [**[String]**](String.md)| the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR | [optional] 
 **compareTo** | [**[String]**](String.md)| Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR | [optional] 
 **orderBy** | [**[String]**](String.md)| Define how to sort the results. You can specify a colun either by it&#39;s index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query). | [optional] 
 **rollup** | [**[String]**](String.md)| Optionaly you can compute rollup for any groupBy column. It must be a valid indexe of a groupBy column or the expression FIRST(N) or LAST(N) to set the rollup position. Index starts at zero. Special value of -1 can be used to compute a grand total. | [optional] 
 **limit** | **Number**| limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults. | [optional] 
 **offset** | **Number**| offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex. | [optional] 
 **beyondLimit** | [**[String]**](String.md)| exclude some dimensions from the limit | [optional] 
 **maxResults** | **Number**| Define the pagination size. | [optional] 
 **startIndex** | **Number**| Pagination starting index. Index is zero-based, so use the #count of the last row to view the next page. | [optional] 
 **lazy** | **String**| if true, get the analysis only if already in cache, else throw a NotInCacheException; if noError returns a null result if the analysis is not in cache ; else regular analysis | [optional] [default to false]
 **data** | **String**| define the analysis data output format. | [optional] 
 **applyFormatting** | **Boolean**| apply formatting to the output data | [optional] 
 **style** | **String**| define the response style. If HUMAN, the API will try to use natural reference for objects, like &#39;My First Project&#39;, &#39;Account&#39;, &#39;Total Sales&#39;... If MACHINE the API will use canonical references that are invariant, e.g. @&#39;5603ca63c531d744b50823a3bis&#39;. If LEGACY the API will also provide internal compound key to lookup objects in the management API. | [optional] [default to HUMAN]
 **envelope** | **String**| define the result envelope | [optional] 
 **timeout** | **Number**| response timeout in milliseconds. If no timeout set, the method will return according to current job status. | [optional] 
 **state** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="scopeAnalysis"></a>
# **scopeAnalysis**
> scopeAnalysis(REFERENCE, opts)

Provide information about the expressions available in the bookmark scope

It also allows to check if a given expression is valid in the scope, and further explore the scope if the expression is an object. Using the offset parameter you can get suggestion at the caret position instead of the complete expression value.

### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var REFERENCE = "REFERENCE_example"; // String | 

var opts = { 
  'target': "target_example", // String | (optional) if you want the scope for a relation, this identify the target domain
  'value': "value_example", // String | (optional) the expression to check and get suggestion for, or null in order to get scope level suggestions
  'offset': 56, // Number | (optionnal) caret position in the expression value in order to provide relevant suggestions based on the caret position. By default the suggestion are based on the full expression if provided, or else the entire bookmark scope.
  'types': ["types_example"], // [String] | (optional) the expression type to filter the suggestions. If undefined all valid expression in the context are returned. 
  'values': ["values_example"], // [String] | (optional) the expression value to filter the suggestions. If undefined all valid expression in the context are returned. 
  'style': "HUMAN" // String | define the response style. If HUMAN, the API will try to use natural reference for objects, like 'My First Project', 'Account', 'Total Sales'... If MACHINE the API will use canonical references that are invariant, e.g. @'5603ca63c531d744b50823a3bis'. If LEGACY the API will also provide internal compound key to lookup objects in the management API.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.scopeAnalysis(REFERENCE, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REFERENCE** | **String**|  | 
 **target** | **String**| (optional) if you want the scope for a relation, this identify the target domain | [optional] 
 **value** | **String**| (optional) the expression to check and get suggestion for, or null in order to get scope level suggestions | [optional] 
 **offset** | **Number**| (optionnal) caret position in the expression value in order to provide relevant suggestions based on the caret position. By default the suggestion are based on the full expression if provided, or else the entire bookmark scope. | [optional] 
 **types** | [**[String]**](String.md)| (optional) the expression type to filter the suggestions. If undefined all valid expression in the context are returned.  | [optional] 
 **values** | [**[String]**](String.md)| (optional) the expression value to filter the suggestions. If undefined all valid expression in the context are returned.  | [optional] 
 **style** | **String**| define the response style. If HUMAN, the API will try to use natural reference for objects, like &#39;My First Project&#39;, &#39;Account&#39;, &#39;Total Sales&#39;... If MACHINE the API will use canonical references that are invariant, e.g. @&#39;5603ca63c531d744b50823a3bis&#39;. If LEGACY the API will also provide internal compound key to lookup objects in the management API. | [optional] [default to HUMAN]

### Return type

null (empty response body)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="viewAnalysis"></a>
# **viewAnalysis**
> viewAnalysis(REFERENCE, opts)

Generate a dataviz specs from a query



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.AnalyticsApi();

var REFERENCE = "REFERENCE_example"; // String | 

var opts = { 
  'x': "x_example", // String | set the x axis channel. This must be a valid expression or the special alias __PERIOD to refer to the main period.
  'y': "y_example", // String | set the y axis channel. This must be a valid expression.
  'color': "color_example", // String | set a series channel, displayed using a color palette. This must be a valid expression.
  'size': "size_example", // String | set a series channel, displayed using the marker size. This must be a valid expression.
  'column': "column_example", // String | set a facetted channel, displayed as columns. This must be a valid expression.
  'row': "row_example", // String | set a facetted channel, displayed as rows. This must be a valid expression.
  'groupBy': ["groupBy_example"], // [String] | Define the facets to agroup by the results. Facet can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'metrics': ["metrics_example"], // [String] | Define the metrics to compute. Metric can be defined using it's ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters.
  'filters': ["filters_example"], // [String] | Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing.
  'period': "period_example", // String | the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...).
  'timeframe': ["timeframe_example"], // [String] | the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR
  'compareTo': ["compareTo_example"], // [String] | Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR
  'orderBy': ["orderBy_example"], // [String] | Define how to sort the results. You can specify a colun either by it's index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query).
  'limit': 789, // Number | limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults.
  'offset': 789, // Number | offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex.
  'beyondLimit': ["beyondLimit_example"], // [String] | exclude some dimensions from the limit
  'maxResults': 56, // Number | paging size
  'startIndex': 56, // Number | paging start index
  'data': "EMBEDED", // String | define how to provide the data, either EMBEDED or through an URL
  'style': "HUMAN", // String | define the response style. If HUMAN, the API will try to use natural reference for objects, like 'My First Project', 'Account', 'Total Sales'... If MACHINE the API will use canonical references that are invariant, e.g. @'5603ca63c531d744b50823a3bis'. If LEGACY the API will also provide internal compound key to lookup objects in the management API.
  'envelope': "envelope_example" // String | define the result envelope
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.viewAnalysis(REFERENCE, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **REFERENCE** | **String**|  | 
 **x** | **String**| set the x axis channel. This must be a valid expression or the special alias __PERIOD to refer to the main period. | [optional] 
 **y** | **String**| set the y axis channel. This must be a valid expression. | [optional] 
 **color** | **String**| set a series channel, displayed using a color palette. This must be a valid expression. | [optional] 
 **size** | **String**| set a series channel, displayed using the marker size. This must be a valid expression. | [optional] 
 **column** | **String**| set a facetted channel, displayed as columns. This must be a valid expression. | [optional] 
 **row** | **String**| set a facetted channel, displayed as rows. This must be a valid expression. | [optional] 
 **groupBy** | [**[String]**](String.md)| Define the facets to agroup by the results. Facet can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **metrics** | [**[String]**](String.md)| Define the metrics to compute. Metric can be defined using it&#39;s ID or any valid expression. If empty, the subject default parameters will apply. You can use the * token to extend the subject default parameters. | [optional] 
 **filters** | [**[String]**](String.md)| Define the filters to apply to results. A filter must be a valid conditional expression. If no filter is defined, the subject default filters will be applied. You can use the * token to extend the subject default filters instead of replacing. | [optional] 
 **period** | **String**| the period defines a dimension or expression of a type date that is used to restrict the timeframe. You can use the __PERIOD expression as a alias to it in other parameters (e.g.: groupBy,orderBy...). | [optional] 
 **timeframe** | [**[String]**](String.md)| the timeframe defines the period range to filter. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __ALL, __LAST_DAY, __LAST_7_DAYS, __CURRENT_MONTH, __PREVIOUS_MONTH, __CURRENT_YEAR, __PREVIOUS_YEAR | [optional] 
 **compareTo** | [**[String]**](String.md)| Activate and define the compare to period. You can use an array of two dates for lower/upper bounds (inclusive). Or some alias like __COMPARE_TO_PREVIOUS_PERIOD, __COMPARE_TO_PREVIOUS_MONTH, __COMPARE_TO_PREVIOUS_YEAR | [optional] 
 **orderBy** | [**[String]**](String.md)| Define how to sort the results. You can specify a colun either by it&#39;s index (starting at zero by groupBy, then metrics), or using an expression. Use the function DESC() and ASC() to modify the sort order. The expression must be a column, or at least a hierarchical parent of a column (in that case a groupBy may be added automatically to the query). | [optional] 
 **limit** | **Number**| limit the resultset size as computed by the database. Note that this is independant from the paging size defined by maxResults. | [optional] 
 **offset** | **Number**| offset the resultset first row - usually used with limit to paginate the database. Note that this is independant from the paging defined by startIndex. | [optional] 
 **beyondLimit** | [**[String]**](String.md)| exclude some dimensions from the limit | [optional] 
 **maxResults** | **Number**| paging size | [optional] 
 **startIndex** | **Number**| paging start index | [optional] 
 **data** | **String**| define how to provide the data, either EMBEDED or through an URL | [optional] [default to EMBEDED]
 **style** | **String**| define the response style. If HUMAN, the API will try to use natural reference for objects, like &#39;My First Project&#39;, &#39;Account&#39;, &#39;Total Sales&#39;... If MACHINE the API will use canonical references that are invariant, e.g. @&#39;5603ca63c531d744b50823a3bis&#39;. If LEGACY the API will also provide internal compound key to lookup objects in the management API. | [optional] [default to HUMAN]
 **envelope** | **String**| define the result envelope | [optional] 

### Return type

null (empty response body)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

