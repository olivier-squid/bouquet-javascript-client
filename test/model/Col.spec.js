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
    instance = new Bouquet.Col();
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

  describe('Col', function() {
    it('should create an instance of Col', function() {
      // uncomment below and update the code to test Col
      //var instane = new Bouquet.Col();
      //expect(instance).to.be.a(Bouquet.Col);
    });

    it('should have the property pk (base name: "pk")', function() {
      // uncomment below and update the code to test the property pk
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property definition (base name: "definition")', function() {
      // uncomment below and update the code to test the property definition
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property extendedType (base name: "extendedType")', function() {
      // uncomment below and update the code to test the property extendedType
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property originType (base name: "originType")', function() {
      // uncomment below and update the code to test the property originType
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property pos (base name: "pos")', function() {
      // uncomment below and update the code to test the property pos
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

    it('should have the property lname (base name: "lname")', function() {
      // uncomment below and update the code to test the property lname
      //var instane = new Bouquet.Col();
      //expect(instance).to.be();
    });

  });

}));
