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
    root.Bouquet.Statistics = factory(root.Bouquet.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Statistics model module.
   * @module model/Statistics
   * @version 4.2
   */

  /**
   * Constructs a new <code>Statistics</code>.
   * @alias module:model/Statistics
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Statistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statistics} obj Optional instance to populate.
   * @return {module:model/Statistics} The populated <code>Statistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Number');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Number');
      }
      if (data.hasOwnProperty('totalBytesProcessed')) {
        obj['totalBytesProcessed'] = ApiClient.convertToType(data['totalBytesProcessed'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * @member {Number} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * @member {Number} totalBytesProcessed
   */
  exports.prototype['totalBytesProcessed'] = undefined;



  return exports;
}));


