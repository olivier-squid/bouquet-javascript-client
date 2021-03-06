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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Bouquet) {
      root.Bouquet = {};
    }
    root.Bouquet.DatabaseInfo = factory(root.Bouquet.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DatabaseInfo model module.
   * @module model/DatabaseInfo
   * @version 4.2
   */

  /**
   * Constructs a new <code>DatabaseInfo</code>.
   * @alias module:model/DatabaseInfo
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DatabaseInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DatabaseInfo} obj Optional instance to populate.
   * @return {module:model/DatabaseInfo} The populated <code>DatabaseInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('connectionOK')) {
        obj['connectionOK'] = ApiClient.convertToType(data['connectionOK'], 'Boolean');
      }
      if (data.hasOwnProperty('skin')) {
        obj['skin'] = ApiClient.convertToType(data['skin'], 'String');
      }
      if (data.hasOwnProperty('product')) {
        obj['product'] = ApiClient.convertToType(data['product'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} connectionOK
   * @default false
   */
  exports.prototype['connectionOK'] = false;
  /**
   * @member {String} skin
   */
  exports.prototype['skin'] = undefined;
  /**
   * @member {String} product
   */
  exports.prototype['product'] = undefined;



  return exports;
}));


