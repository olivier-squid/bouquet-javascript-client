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
    root.Bouquet.ExpressionSuggestionItem = factory(root.Bouquet.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ExpressionSuggestionItem model module.
   * @module model/ExpressionSuggestionItem
   * @version 4.2
   */

  /**
   * Constructs a new <code>ExpressionSuggestionItem</code>.
   * @alias module:model/ExpressionSuggestionItem
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ExpressionSuggestionItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExpressionSuggestionItem} obj Optional instance to populate.
   * @return {module:model/ExpressionSuggestionItem} The populated <code>ExpressionSuggestionItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('caption')) {
        obj['caption'] = ApiClient.convertToType(data['caption'], 'String');
      }
      if (data.hasOwnProperty('ranking')) {
        obj['ranking'] = ApiClient.convertToType(data['ranking'], 'Number');
      }
      if (data.hasOwnProperty('suggestion')) {
        obj['suggestion'] = ApiClient.convertToType(data['suggestion'], 'String');
      }
      if (data.hasOwnProperty('objectType')) {
        obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
      }
      if (data.hasOwnProperty('valueType')) {
        obj['valueType'] = ApiClient.convertToType(data['valueType'], 'String');
      }
      if (data.hasOwnProperty('folder')) {
        obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} display
   */
  exports.prototype['display'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} caption
   */
  exports.prototype['caption'] = undefined;
  /**
   * @member {Number} ranking
   */
  exports.prototype['ranking'] = undefined;
  /**
   * @member {String} suggestion
   */
  exports.prototype['suggestion'] = undefined;
  /**
   * @member {module:model/ExpressionSuggestionItem.ObjectTypeEnum} objectType
   */
  exports.prototype['objectType'] = undefined;
  /**
   * @member {module:model/ExpressionSuggestionItem.ValueTypeEnum} valueType
   */
  exports.prototype['valueType'] = undefined;
  /**
   * @member {String} folder
   */
  exports.prototype['folder'] = undefined;


  /**
   * Allowed values for the <code>objectType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectTypeEnum = {
    /**
     * value: "TABLE"
     * @const
     */
    "TABLE": "TABLE",
    /**
     * value: "COLUMN"
     * @const
     */
    "COLUMN": "COLUMN",
    /**
     * value: "FOREIGNKEY"
     * @const
     */
    "FOREIGNKEY": "FOREIGNKEY",
    /**
     * value: "RELATION"
     * @const
     */
    "RELATION": "RELATION",
    /**
     * value: "DOMAIN"
     * @const
     */
    "DOMAIN": "DOMAIN",
    /**
     * value: "DIMENSION"
     * @const
     */
    "DIMENSION": "DIMENSION",
    /**
     * value: "METRIC"
     * @const
     */
    "METRIC": "METRIC",
    /**
     * value: "EXPRESSION"
     * @const
     */
    "EXPRESSION": "EXPRESSION",
    /**
     * value: "FUNCTION"
     * @const
     */
    "FUNCTION": "FUNCTION"  };

  /**
   * Allowed values for the <code>valueType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ValueTypeEnum = {
    /**
     * value: "OBJECT"
     * @const
     */
    "OBJECT": "OBJECT",
    /**
     * value: "NUMERIC"
     * @const
     */
    "NUMERIC": "NUMERIC",
    /**
     * value: "AGGREGATE"
     * @const
     */
    "AGGREGATE": "AGGREGATE",
    /**
     * value: "DATE"
     * @const
     */
    "DATE": "DATE",
    /**
     * value: "STRING"
     * @const
     */
    "STRING": "STRING",
    /**
     * value: "CONDITION"
     * @const
     */
    "CONDITION": "CONDITION",
    /**
     * value: "LINK"
     * @const
     */
    "LINK": "LINK",
    /**
     * value: "TABLE"
     * @const
     */
    "TABLE": "TABLE",
    /**
     * value: "VIEW"
     * @const
     */
    "VIEW": "VIEW",
    /**
     * value: "DOMAIN"
     * @const
     */
    "DOMAIN": "DOMAIN",
    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",
    /**
     * value: "ERROR"
     * @const
     */
    "ERROR": "ERROR"  };


  return exports;
}));


