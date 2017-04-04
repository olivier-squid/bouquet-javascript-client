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
    define(['ApiClient', 'model/Col', 'model/Row'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Col'), require('./Row'));
  } else {
    // Browser globals (root is window)
    if (!root.Bouquet) {
      root.Bouquet = {};
    }
    root.Bouquet.DataTable = factory(root.Bouquet.ApiClient, root.Bouquet.Col, root.Bouquet.Row);
  }
}(this, function(ApiClient, Col, Row) {
  'use strict';




  /**
   * The DataTable model module.
   * @module model/DataTable
   * @version 4.2
   */

  /**
   * Constructs a new <code>DataTable</code>.
   * @alias module:model/DataTable
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>DataTable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DataTable} obj Optional instance to populate.
   * @return {module:model/DataTable} The populated <code>DataTable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startIndex')) {
        obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
      }
      if (data.hasOwnProperty('cols')) {
        obj['cols'] = ApiClient.convertToType(data['cols'], [Col]);
      }
      if (data.hasOwnProperty('rows')) {
        obj['rows'] = ApiClient.convertToType(data['rows'], [Row]);
      }
      if (data.hasOwnProperty('objectType')) {
        obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
      }
      if (data.hasOwnProperty('fromCache')) {
        obj['fromCache'] = ApiClient.convertToType(data['fromCache'], 'Boolean');
      }
      if (data.hasOwnProperty('fromSmartCache')) {
        obj['fromSmartCache'] = ApiClient.convertToType(data['fromSmartCache'], 'Boolean');
      }
      if (data.hasOwnProperty('executionDate')) {
        obj['executionDate'] = ApiClient.convertToType(data['executionDate'], 'String');
      }
      if (data.hasOwnProperty('fullset')) {
        obj['fullset'] = ApiClient.convertToType(data['fullset'], 'Boolean');
      }
      if (data.hasOwnProperty('totalSize')) {
        obj['totalSize'] = ApiClient.convertToType(data['totalSize'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} startIndex
   */
  exports.prototype['startIndex'] = undefined;
  /**
   * @member {Array.<module:model/Col>} cols
   */
  exports.prototype['cols'] = undefined;
  /**
   * @member {Array.<module:model/Row>} rows
   */
  exports.prototype['rows'] = undefined;
  /**
   * @member {String} objectType
   */
  exports.prototype['objectType'] = undefined;
  /**
   * @member {Boolean} fromCache
   * @default false
   */
  exports.prototype['fromCache'] = false;
  /**
   * @member {Boolean} fromSmartCache
   * @default false
   */
  exports.prototype['fromSmartCache'] = false;
  /**
   * @member {String} executionDate
   */
  exports.prototype['executionDate'] = undefined;
  /**
   * @member {Boolean} fullset
   * @default false
   */
  exports.prototype['fullset'] = false;
  /**
   * @member {Number} totalSize
   */
  exports.prototype['totalSize'] = undefined;



  return exports;
}));


