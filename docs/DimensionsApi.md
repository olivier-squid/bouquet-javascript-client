# Bouquet.DimensionsApi

All URIs are relative to *https://localhost/dev/v4.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOptions**](DimensionsApi.md#addOptions) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options | Adds a dimension option
[**deleteAttribute**](DimensionsApi.md#deleteAttribute) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Deletes an Attribute
[**deleteDimension**](DimensionsApi.md#deleteDimension) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Deletes a dimension
[**deleteOption**](DimensionsApi.md#deleteOption) | **DELETE** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options/{optionId} | Delete a dimension option
[**getAttributeSuggestion**](DimensionsApi.md#getAttributeSuggestion) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes-suggestion | 
[**readAccessRightsAttribute**](DimensionsApi.md#readAccessRightsAttribute) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId}/access | Gets an Attribute&#39;s access rights
[**readAccessRightsDimension**](DimensionsApi.md#readAccessRightsDimension) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/access | Gets a dimension&#39;s access rights
[**readAllDimensions**](DimensionsApi.md#readAllDimensions) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions | Get all Dimensions for the Domain (including child dimensions).
[**readAttribute**](DimensionsApi.md#readAttribute) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Gets an Attribute
[**readAttributes**](DimensionsApi.md#readAttributes) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes | Gets all Attribute
[**readDimension**](DimensionsApi.md#readDimension) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Gets a dimension
[**readOption**](DimensionsApi.md#readOption) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options/{optionId} | Gets a dimension option
[**readOptions**](DimensionsApi.md#readOptions) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options | Gets all dimension options
[**readSubDimensions**](DimensionsApi.md#readSubDimensions) | **GET** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/subdimensions | Gets the SubDimensions
[**storeAccessRights**](DimensionsApi.md#storeAccessRights) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId}/access | Sets an Attribute&#39;s access rights
[**storeAccessRightsDimension**](DimensionsApi.md#storeAccessRightsDimension) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/access | Sets a dimension&#39;s access rights
[**storeAttribute**](DimensionsApi.md#storeAttribute) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes | Creates an Attribute
[**storeAttribute2**](DimensionsApi.md#storeAttribute2) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Creates an Attribute
[**storeDimension**](DimensionsApi.md#storeDimension) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions | Creates a dimension
[**storeDimension2**](DimensionsApi.md#storeDimension2) | **POST** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Creates a dimension
[**updateAttribute**](DimensionsApi.md#updateAttribute) | **PUT** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/attributes/{attributeId} | Updates an Attribute
[**updateDimension**](DimensionsApi.md#updateDimension) | **PUT** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId} | Updates a dimension
[**updateOptions**](DimensionsApi.md#updateOptions) | **PUT** /rs/projects/{projectId}/domains/{domainId}/dimensions/{dimensionId}/options/{optionId} | Updates a dimension option


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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

var apiInstance = new Bouquet.DimensionsApi();

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

