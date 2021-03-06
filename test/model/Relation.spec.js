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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Bouquet);
  }
}(this, function(expect, Bouquet) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Bouquet.Relation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Relation', function() {
    it('should create an instance of Relation', function() {
      // uncomment below and update the code to test Relation
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be.a(Bouquet.Relation);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property accessRights (base name: "accessRights")', function() {
      // uncomment below and update the code to test the property accessRights
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property leftId (base name: "leftId")', function() {
      // uncomment below and update the code to test the property leftId
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property leftCardinality (base name: "leftCardinality")', function() {
      // uncomment below and update the code to test the property leftCardinality
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property rightId (base name: "rightId")', function() {
      // uncomment below and update the code to test the property rightId
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property rightCardinality (base name: "rightCardinality")', function() {
      // uncomment below and update the code to test the property rightCardinality
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property leftName (base name: "leftName")', function() {
      // uncomment below and update the code to test the property leftName
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property rightName (base name: "rightName")', function() {
      // uncomment below and update the code to test the property rightName
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property joinExpression (base name: "joinExpression")', function() {
      // uncomment below and update the code to test the property joinExpression
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property dynamic (base name: "dynamic")', function() {
      // uncomment below and update the code to test the property dynamic
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property oid (base name: "oid")', function() {
      // uncomment below and update the code to test the property oid
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property objectType (base name: "objectType")', function() {
      // uncomment below and update the code to test the property objectType
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "_role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property vctrl (base name: "_vctrl")', function() {
      // uncomment below and update the code to test the property vctrl
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Bouquet.Relation();
      //expect(instance).to.be();
    });

  });

}));
