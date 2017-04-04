# Bouquet.AttributesApi

All URIs are relative to *https://localhost/dev/v4.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAttribute**](AttributesApi.md#deleteAttribute) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Deletes an Attribute
[**readAccessRightsAttribute**](AttributesApi.md#readAccessRightsAttribute) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId}/access | Gets an Attribute&#39;s access rights
[**readAttribute**](AttributesApi.md#readAttribute) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Gets an Attribute
[**readAttributes**](AttributesApi.md#readAttributes) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes | Gets all Attribute
[**storeAccessRights**](AttributesApi.md#storeAccessRights) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId}/access | Sets an Attribute&#39;s access rights
[**storeAttribute**](AttributesApi.md#storeAttribute) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes | Creates an Attribute
[**storeAttribute2**](AttributesApi.md#storeAttribute2) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Creates an Attribute
[**updateAttribute**](AttributesApi.md#updateAttribute) | **PUT** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Updates an Attribute


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

var apiInstance = new Bouquet.AttributesApi();

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

var apiInstance = new Bouquet.AttributesApi();

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

var apiInstance = new Bouquet.AttributesApi();

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

var apiInstance = new Bouquet.AttributesApi();

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

var apiInstance = new Bouquet.AttributesApi();

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

var apiInstance = new Bouquet.AttributesApi();

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

var apiInstance = new Bouquet.AttributesApi();

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

var apiInstance = new Bouquet.AttributesApi();

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

