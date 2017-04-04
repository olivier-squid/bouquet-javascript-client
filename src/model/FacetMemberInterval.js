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
    define(['ApiClient', 'model/FacetMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FacetMember'));
  } else {
    // Browser globals (root is window)
    if (!root.Bouquet) {
      root.Bouquet = {};
    }
    root.Bouquet.FacetMemberInterval = factory(root.Bouquet.ApiClient, root.Bouquet.FacetMember);
  }
}(this, function(ApiClient, FacetMember) {
  'use strict';




  /**
   * The FacetMemberInterval model module.
   * @module model/FacetMemberInterval
   * @version 4.2
   */

  /**
   * Constructs a new <code>FacetMemberInterval</code>.
   * @alias module:model/FacetMemberInterval
   * @class
   * @extends module:model/FacetMember
   */
  var exports = function() {
    var _this = this;
    FacetMember.call(_this);


  };

  /**
   * Constructs a <code>FacetMemberInterval</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FacetMemberInterval} obj Optional instance to populate.
   * @return {module:model/FacetMemberInterval} The populated <code>FacetMemberInterval</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      FacetMember.constructFromObject(data, obj);
      if (data.hasOwnProperty('lowerBound')) {
        obj['lowerBound'] = ApiClient.convertToType(data['lowerBound'], 'String');
      }
      if (data.hasOwnProperty('upperBound')) {
        obj['upperBound'] = ApiClient.convertToType(data['upperBound'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(FacetMember.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {String} lowerBound
   */
  exports.prototype['lowerBound'] = undefined;
  /**
   * @member {String} upperBound
   */
  exports.prototype['upperBound'] = undefined;



  return exports;
}));

