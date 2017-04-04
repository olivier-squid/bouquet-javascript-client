# Bouquet.DomainsApi

All URIs are relative to *https://localhost/dev/v4.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOptions**](DomainsApi.md#addOptions) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options | Adds a dimension option
[**createNew**](DomainsApi.md#createNew) | **GET** /rs/projects/{projectId}/domains/{domainId}/relations/new | Get new default relation for the Domain.
[**deleteAttribute**](DomainsApi.md#deleteAttribute) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Deletes an Attribute
[**deleteDimension**](DomainsApi.md#deleteDimension) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Deletes a dimension
[**deleteDomain**](DomainsApi.md#deleteDomain) | **DELETE** /rs/projects/{projectId}/domains/{domainId} | Deletes a domain
[**deleteMetric**](DomainsApi.md#deleteMetric) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Deletes a Metric
[**deleteOption**](DomainsApi.md#deleteOption) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options/{optionId} | Delete a dimension option
[**getAttributeSuggestion**](DomainsApi.md#getAttributeSuggestion) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes-suggestion | 
[**getDimensionSuggestion**](DomainsApi.md#getDimensionSuggestion) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions-suggestion | Gets suggestions for a dimension definition
[**getMetricSuggestion**](DomainsApi.md#getMetricSuggestion) | **GET** /rs/projects/{projectId}/domains/{domainId}/metrics-suggestion | Gets suggestions for a metric definition
[**getSegmentSuggestion**](DomainsApi.md#getSegmentSuggestion) | **GET** /rs/projects/{projectId}/domains/{domainId}/segment-suggestion | Gets suggestions for a segment definition
[**readAccessRightsAttribute**](DomainsApi.md#readAccessRightsAttribute) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId}/access | Gets an Attribute&#39;s access rights
[**readAccessRightsDimension**](DomainsApi.md#readAccessRightsDimension) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/access | Gets a dimension&#39;s access rights
[**readAccessRightsDomain**](DomainsApi.md#readAccessRightsDomain) | **GET** /rs/projects/{projectId}/domains/{domainId}/access | Gets a domain&#39;s access rights
[**readAccessRightsMetric**](DomainsApi.md#readAccessRightsMetric) | **GET** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId}/access | Gets a Metric&#39;s access rights
[**readAll**](DomainsApi.md#readAll) | **GET** /rs/projects/{projectId}/domains/{domainId}/relations | Get all Relations for the Domain.
[**readAllDimensions**](DomainsApi.md#readAllDimensions) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions | Get all Dimensions for the Domain (including child dimensions).
[**readAttribute**](DomainsApi.md#readAttribute) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Gets an Attribute
[**readAttributes**](DomainsApi.md#readAttributes) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes | Gets all Attribute
[**readCacheInfoDomain**](DomainsApi.md#readCacheInfoDomain) | **GET** /rs/projects/{projectId}/domains/{domainId}/cache | Gets cache status for this domain
[**readDimension**](DomainsApi.md#readDimension) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Gets a dimension
[**readDomain**](DomainsApi.md#readDomain) | **GET** /rs/projects/{projectId}/domains/{domainId} | Gets a domain
[**readDomains**](DomainsApi.md#readDomains) | **GET** /rs/projects/{projectId}/domains | Gets all domains
[**readMetric**](DomainsApi.md#readMetric) | **GET** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Gets a Metric
[**readMetrics**](DomainsApi.md#readMetrics) | **GET** /rs/projects/{projectId}/domains/{domainId}/metrics | Gets All Metrics
[**readOption**](DomainsApi.md#readOption) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options/{optionId} | Gets a dimension option
[**readOptions**](DomainsApi.md#readOptions) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options | Gets all dimension options
[**readSubDimensions**](DomainsApi.md#readSubDimensions) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/subdimensions | Gets the SubDimensions
[**refreshCacheDomain**](DomainsApi.md#refreshCacheDomain) | **GET** /rs/projects/{projectId}/domains/{domainId}/cache/refresh | Force a cache refresh for this domain
[**refreshDomain**](DomainsApi.md#refreshDomain) | **GET** /rs/projects/{projectId}/domains/{domainId}/refreshData | 
[**storeAccessRights**](DomainsApi.md#storeAccessRights) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId}/access | Sets an Attribute&#39;s access rights
[**storeAccessRightsDimension**](DomainsApi.md#storeAccessRightsDimension) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/access | Sets a dimension&#39;s access rights
[**storeAccessRightsDomain**](DomainsApi.md#storeAccessRightsDomain) | **POST** /rs/projects/{projectId}/domains/{domainId}/access | Sets a domain&#39;s access rights
[**storeAccessRightsMetric**](DomainsApi.md#storeAccessRightsMetric) | **POST** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId}/access | Sets a Metric&#39;s access rights
[**storeAttribute**](DomainsApi.md#storeAttribute) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes | Creates an Attribute
[**storeAttribute2**](DomainsApi.md#storeAttribute2) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Creates an Attribute
[**storeDimension**](DomainsApi.md#storeDimension) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions | Creates a dimension
[**storeDimension2**](DomainsApi.md#storeDimension2) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Creates a dimension
[**storeDomain**](DomainsApi.md#storeDomain) | **POST** /rs/projects/{projectId}/domains | Creates a domain
[**storeDomain2**](DomainsApi.md#storeDomain2) | **POST** /rs/projects/{projectId}/domains/{domainId} | Creates a domain
[**storeMetric**](DomainsApi.md#storeMetric) | **POST** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Creates a Metric
[**storeMetric2**](DomainsApi.md#storeMetric2) | **POST** /rs/projects/{projectId}/domains/{domainId}/metrics | Creates a Metric
[**updateAttribute**](DomainsApi.md#updateAttribute) | **PUT** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Updates an Attribute
[**updateDimension**](DomainsApi.md#updateDimension) | **PUT** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Updates a dimension
[**updateDomain**](DomainsApi.md#updateDomain) | **PUT** /rs/projects/{projectId}/domains/{domainId} | Updates a domain
[**updateMetric**](DomainsApi.md#updateMetric) | **PUT** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Updates a Metric
[**updateOptions**](DomainsApi.md#updateOptions) | **PUT** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options/{optionId} | Updates a dimension option


<a name="addOptions"></a>
# **addOptions**
> [DimensionOption] addOptions(projectId, domainId, dimensionId, body)

Adds a dimension option



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var body = new Bouquet.DimensionOption(); // DimensionOption | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addOptions(projectId, domainId, dimensionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **body** | [**DimensionOption**](DimensionOption.md)|  | 

### Return type

[**[DimensionOption]**](DimensionOption.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createNew"></a>
# **createNew**
> Relation createNew(projectId, domainId)

Get new default relation for the Domain.



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNew(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

[**Relation**](Relation.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteAttribute"></a>
# **deleteAttribute**
> &#39;Boolean&#39; deleteAttribute(projectId, domainId, dimensionId, attributeId)

Deletes an Attribute



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var attributeId = "attributeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAttribute(projectId, domainId, dimensionId, attributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **attributeId** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDimension"></a>
# **deleteDimension**
> &#39;Boolean&#39; deleteDimension(projectId, domainId, dimensionId)

Deletes a dimension



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDimension(projectId, domainId, dimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteDomain"></a>
# **deleteDomain**
> &#39;Boolean&#39; deleteDomain(projectId, domainId)

Deletes a domain



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteDomain(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteMetric"></a>
# **deleteMetric**
> &#39;Boolean&#39; deleteMetric(projectId, domainId, metricId)

Deletes a Metric



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var metricId = "metricId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteMetric(projectId, domainId, metricId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **metricId** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOption"></a>
# **deleteOption**
> [DimensionOption] deleteOption(projectId, domainId, dimensionId, optionId)

Delete a dimension option



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var optionId = "optionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOption(projectId, domainId, dimensionId, optionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **optionId** | **String**|  | 

### Return type

[**[DimensionOption]**](DimensionOption.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAttributeSuggestion"></a>
# **getAttributeSuggestion**
> ExpressionSuggestion getAttributeSuggestion(projectId, domainId, dimensionId, opts)



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var opts = { 
  'expression': "expression_example", // String | 
  'offset': 56, // Number | 
  'filterType': "filterType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAttributeSuggestion(projectId, domainId, dimensionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **expression** | **String**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **filterType** | **String**|  | [optional] 

### Return type

[**ExpressionSuggestion**](ExpressionSuggestion.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getDimensionSuggestion"></a>
# **getDimensionSuggestion**
> ExpressionSuggestion getDimensionSuggestion(projectId, domainId, opts)

Gets suggestions for a dimension definition



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var opts = { 
  'dimensionId': "dimensionId_example", // String | 
  'expression': "expression_example", // String | 
  'offset': 56, // Number | 
  'filterType': "filterType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDimensionSuggestion(projectId, domainId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | [optional] 
 **expression** | **String**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **filterType** | **String**|  | [optional] 

### Return type

[**ExpressionSuggestion**](ExpressionSuggestion.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMetricSuggestion"></a>
# **getMetricSuggestion**
> ExpressionSuggestion getMetricSuggestion(projectId, domainId, opts)

Gets suggestions for a metric definition



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var opts = { 
  'metricId': "metricId_example", // String | 
  'expression': "expression_example", // String | 
  'offset': 56, // Number | 
  'filterType': "filterType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMetricSuggestion(projectId, domainId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **metricId** | **String**|  | [optional] 
 **expression** | **String**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **filterType** | **String**|  | [optional] 

### Return type

[**ExpressionSuggestion**](ExpressionSuggestion.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSegmentSuggestion"></a>
# **getSegmentSuggestion**
> ExpressionSuggestion getSegmentSuggestion(projectId, domainId, opts)

Gets suggestions for a segment definition



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var opts = { 
  'expression': "expression_example", // String | 
  'offset': 56, // Number | 
  'filterType': "filterType_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSegmentSuggestion(projectId, domainId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **expression** | **String**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **filterType** | **String**|  | [optional] 

### Return type

[**ExpressionSuggestion**](ExpressionSuggestion.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAccessRightsAttribute"></a>
# **readAccessRightsAttribute**
> [AccessRight] readAccessRightsAttribute(projectId, domainId, dimensionId, attributeId)

Gets an Attribute&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var attributeId = "attributeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAccessRightsAttribute(projectId, domainId, dimensionId, attributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **attributeId** | **String**|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAccessRightsDimension"></a>
# **readAccessRightsDimension**
> [AccessRight] readAccessRightsDimension(projectId, domainId, dimensionId)

Gets a dimension&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAccessRightsDimension(projectId, domainId, dimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAccessRightsDomain"></a>
# **readAccessRightsDomain**
> [AccessRight] readAccessRightsDomain(projectId, domainId)

Gets a domain&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAccessRightsDomain(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAccessRightsMetric"></a>
# **readAccessRightsMetric**
> [AccessRight] readAccessRightsMetric(projectId, domainId, metricId)

Gets a Metric&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var metricId = "metricId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAccessRightsMetric(projectId, domainId, metricId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **metricId** | **String**|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAll"></a>
# **readAll**
> [Relation] readAll(projectId, domainId)

Get all Relations for the Domain.



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAll(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

[**[Relation]**](Relation.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAllDimensions"></a>
# **readAllDimensions**
> [Dimension] readAllDimensions(projectId, domainId)

Get all Dimensions for the Domain (including child dimensions).



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAllDimensions(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

[**[Dimension]**](Dimension.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAttribute"></a>
# **readAttribute**
> Attribute readAttribute(projectId, domainId, dimensionId, attributeId)

Gets an Attribute



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var attributeId = "attributeId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAttribute(projectId, domainId, dimensionId, attributeId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **attributeId** | **String**|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readAttributes"></a>
# **readAttributes**
> [Attribute] readAttributes(projectId, domainId, dimensionId)

Gets all Attribute



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readAttributes(projectId, domainId, dimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 

### Return type

[**[Attribute]**](Attribute.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readCacheInfoDomain"></a>
# **readCacheInfoDomain**
> Object readCacheInfoDomain(projectId, domainId)

Gets cache status for this domain



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readCacheInfoDomain(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

**Object**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readDimension"></a>
# **readDimension**
> Dimension readDimension(projectId, domainId, dimensionId, opts)

Gets a dimension



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var opts = { 
  'deepread': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readDimension(projectId, domainId, dimensionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **deepread** | **Boolean**|  | [optional] 

### Return type

[**Dimension**](Dimension.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readDomain"></a>
# **readDomain**
> Domain readDomain(projectId, domainId, opts)

Gets a domain



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var opts = { 
  'deepread': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readDomain(projectId, domainId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **deepread** | **Boolean**|  | [optional] 

### Return type

[**Domain**](Domain.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readDomains"></a>
# **readDomains**
> [Domain] readDomains(projectId)

Gets all domains



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readDomains(projectId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 

### Return type

[**[Domain]**](Domain.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readMetric"></a>
# **readMetric**
> Metric readMetric(projectId, domainId, metricId, opts)

Gets a Metric



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var metricId = "metricId_example"; // String | 

var opts = { 
  'deepread': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readMetric(projectId, domainId, metricId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **metricId** | **String**|  | 
 **deepread** | **Boolean**|  | [optional] 

### Return type

[**Metric**](Metric.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readMetrics"></a>
# **readMetrics**
> [MetricExt] readMetrics(projectId, domainId)

Gets All Metrics



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readMetrics(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

[**[MetricExt]**](MetricExt.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readOption"></a>
# **readOption**
> DimensionOption readOption(projectId, domainId, dimensionId, optionId)

Gets a dimension option



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var optionId = "optionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readOption(projectId, domainId, dimensionId, optionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **optionId** | **String**|  | 

### Return type

[**DimensionOption**](DimensionOption.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readOptions"></a>
# **readOptions**
> [DimensionOption] readOptions(projectId, domainId, dimensionId)

Gets all dimension options



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readOptions(projectId, domainId, dimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 

### Return type

[**[DimensionOption]**](DimensionOption.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="readSubDimensions"></a>
# **readSubDimensions**
> [Dimension] readSubDimensions(projectId, domainId, dimensionId)

Gets the SubDimensions



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.readSubDimensions(projectId, domainId, dimensionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 

### Return type

[**[Dimension]**](Dimension.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshCacheDomain"></a>
# **refreshCacheDomain**
> Object refreshCacheDomain(projectId, domainId)

Force a cache refresh for this domain



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshCacheDomain(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

**Object**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshDomain"></a>
# **refreshDomain**
> &#39;Boolean&#39; refreshDomain(projectId, domainId)



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshDomain(projectId, domainId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 

### Return type

**&#39;Boolean&#39;**

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeAccessRights"></a>
# **storeAccessRights**
> [AccessRight] storeAccessRights(projectId, domainId, dimensionId, attributeId, body)

Sets an Attribute&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var attributeId = "attributeId_example"; // String | 

var body = [new Bouquet.AccessRight()]; // [AccessRight] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeAccessRights(projectId, domainId, dimensionId, attributeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **attributeId** | **String**|  | 
 **body** | [**[AccessRight]**](AccessRight.md)|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeAccessRightsDimension"></a>
# **storeAccessRightsDimension**
> [AccessRight] storeAccessRightsDimension(projectId, domainId, dimensionId, body)

Sets a dimension&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var body = [new Bouquet.AccessRight()]; // [AccessRight] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeAccessRightsDimension(projectId, domainId, dimensionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **body** | [**[AccessRight]**](AccessRight.md)|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeAccessRightsDomain"></a>
# **storeAccessRightsDomain**
> [AccessRight] storeAccessRightsDomain(projectId, domainId, body)

Sets a domain&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var body = [new Bouquet.AccessRight()]; // [AccessRight] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeAccessRightsDomain(projectId, domainId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **body** | [**[AccessRight]**](AccessRight.md)|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeAccessRightsMetric"></a>
# **storeAccessRightsMetric**
> [AccessRight] storeAccessRightsMetric(projectId, domainId, metricId, body)

Sets a Metric&#39;s access rights



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var metricId = "metricId_example"; // String | 

var body = [new Bouquet.AccessRight()]; // [AccessRight] | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeAccessRightsMetric(projectId, domainId, metricId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **metricId** | **String**|  | 
 **body** | [**[AccessRight]**](AccessRight.md)|  | 

### Return type

[**[AccessRight]**](AccessRight.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeAttribute"></a>
# **storeAttribute**
> Attribute storeAttribute(projectId, domainId, dimensionId, body)

Creates an Attribute



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var body = new Bouquet.Attribute(); // Attribute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeAttribute(projectId, domainId, dimensionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **body** | [**Attribute**](Attribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeAttribute2"></a>
# **storeAttribute2**
> Attribute storeAttribute2(projectId, domainId, dimensionId, attributeId, body)

Creates an Attribute



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var attributeId = "attributeId_example"; // String | 

var body = new Bouquet.Attribute(); // Attribute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeAttribute2(projectId, domainId, dimensionId, attributeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **attributeId** | **String**|  | 
 **body** | [**Attribute**](Attribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeDimension"></a>
# **storeDimension**
> Dimension storeDimension(projectId, domainId, body)

Creates a dimension



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var body = new Bouquet.Dimension(); // Dimension | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeDimension(projectId, domainId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **body** | [**Dimension**](Dimension.md)|  | 

### Return type

[**Dimension**](Dimension.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeDimension2"></a>
# **storeDimension2**
> Dimension storeDimension2(projectId, domainId, dimensionId, body)

Creates a dimension



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var body = new Bouquet.Dimension(); // Dimension | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeDimension2(projectId, domainId, dimensionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **body** | [**Dimension**](Dimension.md)|  | 

### Return type

[**Dimension**](Dimension.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeDomain"></a>
# **storeDomain**
> Domain storeDomain(projectId, body)

Creates a domain



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var body = new Bouquet.Domain(); // Domain | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeDomain(projectId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **body** | [**Domain**](Domain.md)|  | 

### Return type

[**Domain**](Domain.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeDomain2"></a>
# **storeDomain2**
> Domain storeDomain2(projectId, domainId, body)

Creates a domain



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var body = new Bouquet.Domain(); // Domain | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeDomain2(projectId, domainId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **body** | [**Domain**](Domain.md)|  | 

### Return type

[**Domain**](Domain.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeMetric"></a>
# **storeMetric**
> Metric storeMetric(projectId, domainId, metricId, body)

Creates a Metric



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var metricId = "metricId_example"; // String | 

var body = new Bouquet.Metric(); // Metric | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeMetric(projectId, domainId, metricId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **metricId** | **String**|  | 
 **body** | [**Metric**](Metric.md)|  | 

### Return type

[**Metric**](Metric.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeMetric2"></a>
# **storeMetric2**
> Metric storeMetric2(projectId, domainId, body)

Creates a Metric



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var body = new Bouquet.Metric(); // Metric | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.storeMetric2(projectId, domainId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **body** | [**Metric**](Metric.md)|  | 

### Return type

[**Metric**](Metric.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateAttribute"></a>
# **updateAttribute**
> Attribute updateAttribute(projectId, domainId, dimensionId, attributeId, body)

Updates an Attribute



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var attributeId = "attributeId_example"; // String | 

var body = new Bouquet.Attribute(); // Attribute | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAttribute(projectId, domainId, dimensionId, attributeId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **attributeId** | **String**|  | 
 **body** | [**Attribute**](Attribute.md)|  | 

### Return type

[**Attribute**](Attribute.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDimension"></a>
# **updateDimension**
> Dimension updateDimension(projectId, domainId, dimensionId, body)

Updates a dimension



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var body = new Bouquet.Dimension(); // Dimension | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDimension(projectId, domainId, dimensionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **body** | [**Dimension**](Dimension.md)|  | 

### Return type

[**Dimension**](Dimension.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateDomain"></a>
# **updateDomain**
> Domain updateDomain(projectId, domainId, body)

Updates a domain



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var body = new Bouquet.Domain(); // Domain | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateDomain(projectId, domainId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **body** | [**Domain**](Domain.md)|  | 

### Return type

[**Domain**](Domain.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateMetric"></a>
# **updateMetric**
> Metric updateMetric(projectId, domainId, metricId, body)

Updates a Metric



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var metricId = "metricId_example"; // String | 

var body = new Bouquet.Metric(); // Metric | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMetric(projectId, domainId, metricId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **metricId** | **String**|  | 
 **body** | [**Metric**](Metric.md)|  | 

### Return type

[**Metric**](Metric.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateOptions"></a>
# **updateOptions**
> [DimensionOption] updateOptions(projectId, domainId, dimensionId, optionId, body)

Updates a dimension option



### Example
```javascript
var Bouquet = require('bouquet');
var defaultClient = Bouquet.ApiClient.default;

// Configure OAuth2 access token for authorization: kraken_auth
var kraken_auth = defaultClient.authentications['kraken_auth'];
kraken_auth.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new Bouquet.DomainsApi();

var projectId = "projectId_example"; // String | 

var domainId = "domainId_example"; // String | 

var dimensionId = "dimensionId_example"; // String | 

var optionId = "optionId_example"; // String | 

var body = new Bouquet.DimensionOption(); // DimensionOption | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateOptions(projectId, domainId, dimensionId, optionId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**|  | 
 **domainId** | **String**|  | 
 **dimensionId** | **String**|  | 
 **optionId** | **String**|  | 
 **body** | [**DimensionOption**](DimensionOption.md)|  | 

### Return type

[**[DimensionOption]**](DimensionOption.md)

### Authorization

[kraken_auth](../README.md#kraken_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

