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
    root.Bouquet.ExtendedType = factory(root.Bouquet.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExtendedType model module.
   * @module model/ExtendedType
   * @version 4.2
   */

  /**
   * Constructs a new <code>ExtendedType</code>.
   * @alias module:model/ExtendedType
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ExtendedType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExtendedType} obj Optional instance to populate.
   * @return {module:model/ExtendedType} The populated <code>ExtendedType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('dataType')) {
        obj['dataType'] = ApiClient.convertToType(data['dataType'], 'Number');
      }
      if (data.hasOwnProperty('scale')) {
        obj['scale'] = ApiClient.convertToType(data['scale'], 'Number');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} dataType
   */
  exports.prototype['dataType'] = undefined;
  /**
   * @member {Number} scale
   */
  exports.prototype['scale'] = undefined;
  /**
   * @member {Number} size
   */
  exports.prototype['size'] = undefined;



  return exports;
}));


