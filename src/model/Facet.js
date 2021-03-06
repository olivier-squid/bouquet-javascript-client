/**
 * Bouquet
 * This is Bouquet API
 *
 * OpenAPI spec version: 4.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Dimension', 'model/FacetMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Dimension'), require('./FacetMember'));
  } else {
    // Browser globals (root is window)
    if (!root.Bouquet) {
      root.Bouquet = {};
    }
    root.Bouquet.Facet = factory(root.Bouquet.ApiClient, root.Bouquet.Dimension, root.Bouquet.FacetMember);
  }
}(this, function(ApiClient, Dimension, FacetMember) {
  'use strict';




  /**
   * The Facet model module.
   * @module model/Facet
   * @version 4.2
   */

  /**
   * Constructs a new <code>Facet</code>.
   * @alias module:model/Facet
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>Facet</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Facet} obj Optional instance to populate.
   * @return {module:model/Facet} The populated <code>Facet</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [FacetMember]);
      }
      if (data.hasOwnProperty('selectedItems')) {
        obj['selectedItems'] = ApiClient.convertToType(data['selectedItems'], [FacetMember]);
      }
      if (data.hasOwnProperty('dimension')) {
        obj['dimension'] = Dimension.constructFromObject(data['dimension']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('hasMore')) {
        obj['hasMore'] = ApiClient.convertToType(data['hasMore'], 'Boolean');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
      }
      if (data.hasOwnProperty('errorMessage')) {
        obj['errorMessage'] = ApiClient.convertToType(data['errorMessage'], 'String');
      }
      if (data.hasOwnProperty('totalSize')) {
        obj['totalSize'] = ApiClient.convertToType(data['totalSize'], 'Number');
      }
      if (data.hasOwnProperty('compositeName')) {
        obj['compositeName'] = ApiClient.convertToType(data['compositeName'], 'Boolean');
      }
      if (data.hasOwnProperty('done')) {
        obj['done'] = ApiClient.convertToType(data['done'], 'Boolean');
      }
      if (data.hasOwnProperty('proxy')) {
        obj['proxy'] = ApiClient.convertToType(data['proxy'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/FacetMember>} items
   */
  exports.prototype['items'] = undefined;
  /**
   * @member {Array.<module:model/FacetMember>} selectedItems
   */
  exports.prototype['selectedItems'] = undefined;
  /**
   * @member {module:model/Dimension} dimension
   */
  exports.prototype['dimension'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} hasMore
   * @default false
   */
  exports.prototype['hasMore'] = false;
  /**
   * @member {Boolean} error
   * @default false
   */
  exports.prototype['error'] = false;
  /**
   * @member {String} errorMessage
   */
  exports.prototype['errorMessage'] = undefined;
  /**
   * @member {Number} totalSize
   */
  exports.prototype['totalSize'] = undefined;
  /**
   * @member {Boolean} compositeName
   * @default false
   */
  exports.prototype['compositeName'] = false;
  /**
   * @member {Boolean} done
   * @default false
   */
  exports.prototype['done'] = false;
  /**
   * @member {Boolean} proxy
   * @default false
   */
  exports.prototype['proxy'] = false;



  return exports;
}));


