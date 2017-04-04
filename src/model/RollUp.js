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
    root.Bouquet.RollUp = factory(root.Bouquet.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RollUp model module.
   * @module model/RollUp
   * @version 4.2
   */

  /**
   * Constructs a new <code>RollUp</code>.
   * a Rollup allows to specify which dimension to use for the sub-total level. The dimension is defined by its indice in the analysis job, starting at 0. In order to compute a grand-total, use indice -1. It is also possible to define how to sort sub-total using the position, default to FIRST.
   * @alias module:model/RollUp
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RollUp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RollUp} obj Optional instance to populate.
   * @return {module:model/RollUp} The populated <code>RollUp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('col')) {
        obj['col'] = ApiClient.convertToType(data['col'], 'Number');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'String');
      }
    }
    return obj;
  }

  /**
   * the indice of the dimension to rollup on, or -1 to compute a grand-total.
   * @member {Number} col
   */
  exports.prototype['col'] = undefined;
  /**
   * define how to sort the sub-total, either before the detailled data (FIRST) or after (LAST)
   * @member {module:model/RollUp.PositionEnum} position
   */
  exports.prototype['position'] = undefined;


  /**
   * Allowed values for the <code>position</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PositionEnum = {
    /**
     * value: "FIRST"
     * @const
     */
    "FIRST": "FIRST",
    /**
     * value: "LAST"
     * @const
     */
    "LAST": "LAST"  };


  return exports;
}));


