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
    instance = new Bouquet.DomainOption();
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

  describe('DomainOption', function() {
    it('should create an instance of DomainOption', function() {
      // uncomment below and update the code to test DomainOption
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be.a(Bouquet.DomainOption);
    });

    it('should have the property shortcut (base name: "shortcut")', function() {
      // uncomment below and update the code to test the property shortcut
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property analysisJob (base name: "analysisJob")', function() {
      // uncomment below and update the code to test the property analysisJob
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property sourceProjectId (base name: "sourceProjectId")', function() {
      // uncomment below and update the code to test the property sourceProjectId
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property destSchema (base name: "destSchema")', function() {
      // uncomment below and update the code to test the property destSchema
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property destProjectId (base name: "destProjectId")', function() {
      // uncomment below and update the code to test the property destProjectId
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property reinjected (base name: "reinjected")', function() {
      // uncomment below and update the code to test the property reinjected
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property dependencies (base name: "dependencies")', function() {
      // uncomment below and update the code to test the property dependencies
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property alink (base name: "alink")', function() {
      // uncomment below and update the code to test the property alink
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

    it('should have the property linkSource (base name: "linkSource")', function() {
      // uncomment below and update the code to test the property linkSource
      //var instane = new Bouquet.DomainOption();
      //expect(instance).to.be();
    });

  });

}));
