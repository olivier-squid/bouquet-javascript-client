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
    define(['ApiClient', 'model/AccessRight', 'model/Bookmark', 'model/Domain', 'model/ProjectPK', 'model/Relation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccessRight'), require('./Bookmark'), require('./Domain'), require('./ProjectPK'), require('./Relation'));
  } else {
    // Browser globals (root is window)
    if (!root.Bouquet) {
      root.Bouquet = {};
    }
    root.Bouquet.Project = factory(root.Bouquet.ApiClient, root.Bouquet.AccessRight, root.Bouquet.Bookmark, root.Bouquet.Domain, root.Bouquet.ProjectPK, root.Bouquet.Relation);
  }
}(this, function(ApiClient, AccessRight, Bookmark, Domain, ProjectPK, Relation) {
  'use strict';




  /**
   * The Project model module.
   * @module model/Project
   * @version 4.2
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   */
  var exports = function() {
    var _this = this;























  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ProjectPK.constructFromObject(data['id']);
      }
      if (data.hasOwnProperty('accessRights')) {
        obj['accessRights'] = ApiClient.convertToType(data['accessRights'], [AccessRight]);
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dbUrl')) {
        obj['dbUrl'] = ApiClient.convertToType(data['dbUrl'], 'String');
      }
      if (data.hasOwnProperty('dbUser')) {
        obj['dbUser'] = ApiClient.convertToType(data['dbUser'], 'String');
      }
      if (data.hasOwnProperty('dbPassword')) {
        obj['dbPassword'] = ApiClient.convertToType(data['dbPassword'], 'String');
      }
      if (data.hasOwnProperty('dbSchemas')) {
        obj['dbSchemas'] = ApiClient.convertToType(data['dbSchemas'], ['String']);
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = ApiClient.convertToType(data['config'], 'String');
      }
      if (data.hasOwnProperty('dbPasswordLength')) {
        obj['dbPasswordLength'] = ApiClient.convertToType(data['dbPasswordLength'], 'Number');
      }
      if (data.hasOwnProperty('dbVendorId')) {
        obj['dbVendorId'] = ApiClient.convertToType(data['dbVendorId'], 'String');
      }
      if (data.hasOwnProperty('dbArguments')) {
        obj['dbArguments'] = ApiClient.convertToType(data['dbArguments'], {'String': 'String'});
      }
      if (data.hasOwnProperty('internalVersion')) {
        obj['internalVersion'] = ApiClient.convertToType(data['internalVersion'], 'Number');
      }
      if (data.hasOwnProperty('domains')) {
        obj['domains'] = ApiClient.convertToType(data['domains'], [Domain]);
      }
      if (data.hasOwnProperty('relations')) {
        obj['relations'] = ApiClient.convertToType(data['relations'], [Relation]);
      }
      if (data.hasOwnProperty('bookmarks')) {
        obj['bookmarks'] = ApiClient.convertToType(data['bookmarks'], [Bookmark]);
      }
      if (data.hasOwnProperty('usingInMemExt')) {
        obj['usingInMemExt'] = ApiClient.convertToType(data['usingInMemExt'], 'String');
      }
      if (data.hasOwnProperty('oid')) {
        obj['oid'] = ApiClient.convertToType(data['oid'], 'String');
      }
      if (data.hasOwnProperty('objectType')) {
        obj['objectType'] = ApiClient.convertToType(data['objectType'], 'String');
      }
      if (data.hasOwnProperty('_role')) {
        obj['_role'] = ApiClient.convertToType(data['_role'], 'String');
      }
      if (data.hasOwnProperty('_vctrl')) {
        obj['_vctrl'] = ApiClient.convertToType(data['_vctrl'], 'Number');
      }
      if (data.hasOwnProperty('_children')) {
        obj['_children'] = ApiClient.convertToType(data['_children'], ['String']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The object Composite Id (Primary Key)
   * @member {module:model/ProjectPK} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The ACL for this object
   * @member {Array.<module:model/AccessRight>} accessRights
   */
  exports.prototype['accessRights'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The DataBase JDBC URL (requires WRITE role to view)
   * @member {String} dbUrl
   */
  exports.prototype['dbUrl'] = undefined;
  /**
   * The DataBase JDBC user (requires WRITE role to view)
   * @member {String} dbUser
   */
  exports.prototype['dbUser'] = undefined;
  /**
   * The DataBase JDBC password (write-only)
   * @member {String} dbPassword
   */
  exports.prototype['dbPassword'] = undefined;
  /**
   * The DataBase Schemas enabled (requires WRITE role). The list of available discovered Schemas can be found via the {projectId}/schemas-suggestion method
   * @member {Array.<String>} dbSchemas
   */
  exports.prototype['dbSchemas'] = undefined;
  /**
   * Deprecated : An optional configuration (json) object
   * @member {String} config
   */
  exports.prototype['config'] = undefined;
  /**
   * The DataBase JDBC password length
   * @member {Number} dbPasswordLength
   */
  exports.prototype['dbPasswordLength'] = undefined;
  /**
   * The DataBase vendor ID to use for connecting
   * @member {String} dbVendorId
   */
  exports.prototype['dbVendorId'] = undefined;
  /**
   * The DataBase JDBC URL arguments
   * @member {Object.<String, String>} dbArguments
   */
  exports.prototype['dbArguments'] = undefined;
  /**
   * @member {Number} internalVersion
   */
  exports.prototype['internalVersion'] = undefined;
  /**
   * @member {Array.<module:model/Domain>} domains
   */
  exports.prototype['domains'] = undefined;
  /**
   * @member {Array.<module:model/Relation>} relations
   */
  exports.prototype['relations'] = undefined;
  /**
   * @member {Array.<module:model/Bookmark>} bookmarks
   */
  exports.prototype['bookmarks'] = undefined;
  /**
   * If the Project is using In Memory Extension
   * @member {String} usingInMemExt
   */
  exports.prototype['usingInMemExt'] = undefined;
  /**
   * The Object Id
   * @member {String} oid
   */
  exports.prototype['oid'] = undefined;
  /**
   * @member {String} objectType
   */
  exports.prototype['objectType'] = undefined;
  /**
   * The role of the current User (passed in the context) over this object
   * @member {module:model/Project.RoleEnum} _role
   */
  exports.prototype['_role'] = undefined;
  /**
   * Internal version control value. (used by optimistic-locking mechanism)
   * @member {Number} _vctrl
   */
  exports.prototype['_vctrl'] = undefined;
  /**
   * @member {Array.<String>} _children
   */
  exports.prototype['_children'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;


  /**
   * Allowed values for the <code>_role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "EXECUTE"
     * @const
     */
    "EXECUTE": "EXECUTE",
    /**
     * value: "READ"
     * @const
     */
    "READ": "READ",
    /**
     * value: "WRITE"
     * @const
     */
    "WRITE": "WRITE",
    /**
     * value: "OWNER"
     * @const
     */
    "OWNER": "OWNER"  };


  return exports;
}));

