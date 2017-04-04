# Bouquet.MetricsApi

All URIs are relative to *https://localhost/dev/v4.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteMetric**](MetricsApi.md#deleteMetric) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Deletes a Metric
[**readAccessRightsMetric**](MetricsApi.md#readAccessRightsMetric) | **GET** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId}/access | Gets a Metric&#39;s access rights
[**readMetric**](MetricsApi.md#readMetric) | **GET** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Gets a Metric
[**readMetrics**](MetricsApi.md#readMetrics) | **GET** /rs/projects/{projectId}/domains/{domainId}/metrics | Gets All Metrics
[**storeAccessRightsMetric**](MetricsApi.md#storeAccessRightsMetric) | **POST** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId}/access | Sets a Metric&#39;s access rights
[**storeMetric**](MetricsApi.md#storeMetric) | **POST** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Creates a Metric
[**storeMetric2**](MetricsApi.md#storeMetric2) | **POST** /rs/projects/{projectId}/domains/{domainId}/metrics | Creates a Metric
[**updateMetric**](MetricsApi.md#updateMetric) | **PUT** /rs/projects/{projectId}/domains/{domainId}/metrics/{metricId} | Updates a Metric


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

var apiInstance = new Bouquet.MetricsApi();

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

var apiInstance = new Bouquet.MetricsApi();

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

var apiInstance = new Bouquet.MetricsApi();

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

var apiInstance = new Bouquet.MetricsApi();

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

var apiInstance = new Bouquet.MetricsApi();

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

var apiInstance = new Bouquet.MetricsApi();

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

var apiInstance = new Bouquet.MetricsApi();

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

var apiInstance = new Bouquet.MetricsApi();

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

