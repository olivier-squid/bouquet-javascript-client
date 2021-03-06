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
    instance = new Bouquet.Domain();
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

  describe('Domain', function() {
    it('should create an instance of Domain', function() {
      // uncomment below and update the code to test Domain
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be.a(Bouquet.Domain);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property accessRights (base name: "accessRights")', function() {
      // uncomment below and update the code to test the property accessRights
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property internalVersion (base name: "internalVersion")', function() {
      // uncomment below and update the code to test the property internalVersion
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "options")', function() {
      // uncomment below and update the code to test the property options
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property metrics (base name: "metrics")', function() {
      // uncomment below and update the code to test the property metrics
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property dimensions (base name: "dimensions")', function() {
      // uncomment below and update the code to test the property dimensions
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property dynamic (base name: "dynamic")', function() {
      // uncomment below and update the code to test the property dynamic
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property oid (base name: "oid")', function() {
      // uncomment below and update the code to test the property oid
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property objectType (base name: "objectType")', function() {
      // uncomment below and update the code to test the property objectType
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "_role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property vctrl (base name: "_vctrl")', function() {
      // uncomment below and update the code to test the property vctrl
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property children (base name: "_children")', function() {
      // uncomment below and update the code to test the property children
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Bouquet.Domain();
      //expect(instance).to.be();
    });

  });

}));
