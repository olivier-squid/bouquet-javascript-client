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
    define(['ApiClient', 'model/Problem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Problem'));
  } else {
    // Browser globals (root is window)
    if (!root.Bouquet) {
      root.Bouquet = {};
    }
    root.Bouquet.AnalyticsQuery = factory(root.Bouquet.ApiClient, root.Bouquet.Problem);
  }
}(this, function(ApiClient, Problem) {
  'use strict';




  /**
   * The AnalyticsQuery model module.
   * @module model/AnalyticsQuery
   * @version 4.2
   */

  /**
   * Constructs a new <code>AnalyticsQuery</code>.
   * @alias module:model/AnalyticsQuery
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>AnalyticsQuery</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnalyticsQuery} obj Optional instance to populate.
   * @return {module:model/AnalyticsQuery} The populated <code>AnalyticsQuery</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('bookmarkId')) {
        obj['bookmarkId'] = ApiClient.convertToType(data['bookmarkId'], 'String');
      }
      if (data.hasOwnProperty('bbid')) {
        obj['bbid'] = ApiClient.convertToType(data['bbid'], 'String');
      }
      if (data.hasOwnProperty('rollups')) {
        obj['rollups'] = ApiClient.convertToType(data['rollups'], ['String']);
      }
      if (data.hasOwnProperty('style')) {
        obj['style'] = ApiClient.convertToType(data['style'], 'String');
      }
      if (data.hasOwnProperty('lazy')) {
        obj['lazy'] = ApiClient.convertToType(data['lazy'], 'String');
      }
      if (data.hasOwnProperty('startIndex')) {
        obj['startIndex'] = ApiClient.convertToType(data['startIndex'], 'Number');
      }
      if (data.hasOwnProperty('maxResults')) {
        obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
      }
      if (data.hasOwnProperty('queryID')) {
        obj['queryID'] = ApiClient.convertToType(data['queryID'], 'String');
      }
      if (data.hasOwnProperty('problems')) {
        obj['problems'] = ApiClient.convertToType(data['problems'], [Problem]);
      }
      if (data.hasOwnProperty('groupBy')) {
        obj['groupBy'] = ApiClient.convertToType(data['groupBy'], ['String']);
      }
      if (data.hasOwnProperty('metrics')) {
        obj['metrics'] = ApiClient.convertToType(data['metrics'], ['String']);
      }
      if (data.hasOwnProperty('orderBy')) {
        obj['orderBy'] = ApiClient.convertToType(data['orderBy'], ['String']);
      }
      if (data.hasOwnProperty('beyondLimit')) {
        obj['beyondLimit'] = ApiClient.convertToType(data['beyondLimit'], ['String']);
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('period')) {
        obj['period'] = ApiClient.convertToType(data['period'], 'String');
      }
      if (data.hasOwnProperty('filters')) {
        obj['filters'] = ApiClient.convertToType(data['filters'], ['String']);
      }
      if (data.hasOwnProperty('timeframe')) {
        obj['timeframe'] = ApiClient.convertToType(data['timeframe'], ['String']);
      }
      if (data.hasOwnProperty('compareTo')) {
        obj['compareTo'] = ApiClient.convertToType(data['compareTo'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * @member {String} bookmarkId
   */
  exports.prototype['bookmarkId'] = undefined;
  /**
   * @member {String} bbid
   */
  exports.prototype['bbid'] = undefined;
  /**
   * @member {Array.<String>} rollups
   */
  exports.prototype['rollups'] = undefined;
  /**
   * @member {module:model/AnalyticsQuery.StyleEnum} style
   */
  exports.prototype['style'] = undefined;
  /**
   * @member {String} lazy
   */
  exports.prototype['lazy'] = undefined;
  /**
   * @member {Number} startIndex
   */
  exports.prototype['startIndex'] = undefined;
  /**
   * @member {Number} maxResults
   */
  exports.prototype['maxResults'] = undefined;
  /**
   * @member {String} queryID
   */
  exports.prototype['queryID'] = undefined;
  /**
   * @member {Array.<module:model/Problem>} problems
   */
  exports.prototype['problems'] = undefined;
  /**
   * @member {Array.<String>} groupBy
   */
  exports.prototype['groupBy'] = undefined;
  /**
   * @member {Array.<String>} metrics
   */
  exports.prototype['metrics'] = undefined;
  /**
   * @member {Array.<String>} orderBy
   */
  exports.prototype['orderBy'] = undefined;
  /**
   * @member {Array.<String>} beyondLimit
   */
  exports.prototype['beyondLimit'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {String} period
   */
  exports.prototype['period'] = undefined;
  /**
   * @member {Array.<String>} filters
   */
  exports.prototype['filters'] = undefined;
  /**
   * @member {Array.<String>} timeframe
   */
  exports.prototype['timeframe'] = undefined;
  /**
   * @member {Array.<String>} compareTo
   */
  exports.prototype['compareTo'] = undefined;


  /**
   * Allowed values for the <code>style</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StyleEnum = {
    /**
     * value: "HUMAN"
     * @const
     */
    "HUMAN": "HUMAN",
    /**
     * value: "LEGACY"
     * @const
     */
    "LEGACY": "LEGACY",
    /**
     * value: "ROBOT"
     * @const
     */
    "ROBOT": "ROBOT",
    /**
     * value: "HTML"
     * @const
     */
    "HTML": "HTML"  };


  return exports;
}));


