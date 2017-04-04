# Bouquet.DatabaseApi

All URIs are relative to *https://localhost/dev/v4.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDatabaseStatus**](DatabaseApi.md#getDatabaseStatus) | **GET** /rs/projects/{projectId}/database | Get Database Status and vendor information
[**readSchema**](DatabaseApi.md#readSchema) | **GET** /rs/projects/{projectId}/database/schemas/{schemaName} | list the schema&#39;s tables
[**readSchemas**](DatabaseApi.md#readSchemas) | **GET** /rs/projects/{projectId}/database/schemas | list the database schemas
[**readTable**](DatabaseApi.md#readTable) | **GET** /rs/projects/{projectId}/database/schemas/{schemaName}/tables/{tableName} | get the table definition
[**refreshTable**](DatabaseApi.md#refreshTable) | **GET** /rs/projects/{projectId}/database/schemas/{schemaName}/tables/{tableName}/refresh | refresh the table definition. If it is a new table, makes it available. Note that this won&#39;t clear the cache.


<a name="getDatabaseStatus"></a>
# **getDatabaseStatus**
> DatabaseInfo getDatabaseStatus(projectId)

Get Database Status and vendor information



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DatabaseApi();

var projectId = "projectId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDatabaseStatus(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

[**DatabaseInfo**](DatabaseInfo.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readSchema"></a>
# **readSchema**
> [Object] readSchema(projectId, schemaName)

list the schema&#39;s tables



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DatabaseApi();

var projectId = "projectId_example"; // String | 

var schemaName = "schemaName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readSchema(projectId, schemaName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **schemaName** | **String**|  | 

### Return type

**[Object]**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readSchemas"></a>
# **readSchemas**
> [Object] readSchemas(projectId)

list the database schemas



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DatabaseApi();

var projectId = "projectId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readSchemas(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

**[Object]**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readTable"></a>
# **readTable**
> Object readTable(projectId, schemaName, tableName)

get the table definition



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DatabaseApi();

var projectId = "projectId_example"; // String | 

var schemaName = "schemaName_example"; // String | 

var tableName = "tableName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readTable(projectId, schemaName, tableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **schemaName** | **String**|  | 
 **tableName** | **String**|  | 

### Return type

**Object**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshTable"></a>
# **refreshTable**
> Object refreshTable(projectId, schemaName, tableName)

refresh the table definition. If it is a new table, makes it available. Note that this won&#39;t clear the cache.



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DatabaseApi();

var projectId = "projectId_example"; // String | 

var schemaName = "schemaName_example"; // String | 

var tableName = "tableName_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshTable(projectId, schemaName, tableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **schemaName** | **String**|  | 
 **tableName** | **String**|  | 

### Return type

**Object**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

