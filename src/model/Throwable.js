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
    define(['ApiClient', 'model/StackTraceElement', 'model/Throwable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StackTraceElement'), require('./Throwable'));
  } else {
    // Browser globals (root is window)
    if (!root.Bouquet) {
      root.Bouquet = {};
    }
    root.Bouquet.Throwable = factory(root.Bouquet.ApiClient, root.Bouquet.StackTraceElement, root.Bouquet.Throwable);
  }
}(this, function(ApiClient, StackTraceElement, Throwable) {
  'use strict';




  /**
   * The Throwable model module.
   * @module model/Throwable
   * @version 4.2
   */

  /**
   * Constructs a new <code>Throwable</code>.
   * @alias module:model/Throwable
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Throwable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Throwable} obj Optional instance to populate.
   * @return {module:model/Throwable} The populated <code>Throwable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cause')) {
        obj['cause'] = Throwable.constructFromObject(data['cause']);
      }
      if (data.hasOwnProperty('stackTrace')) {
        obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], [StackTraceElement]);
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('localizedMessage')) {
        obj['localizedMessage'] = ApiClient.convertToType(data['localizedMessage'], 'String');
      }
      if (data.hasOwnProperty('suppressed')) {
        obj['suppressed'] = ApiClient.convertToType(data['suppressed'], [Throwable]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Throwable} cause
   */
  exports.prototype['cause'] = undefined;
  /**
   * @member {Array.<module:model/StackTraceElement>} stackTrace
   */
  exports.prototype['stackTrace'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} localizedMessage
   */
  exports.prototype['localizedMessage'] = undefined;
  /**
   * @member {Array.<module:model/Throwable>} suppressed
   */
  exports.prototype['suppressed'] = undefined;



  return exports;
}));


