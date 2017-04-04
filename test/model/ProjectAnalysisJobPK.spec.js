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
    instance = new Bouquet.ProjectAnalysisJobPK();
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

  describe('ProjectAnalysisJobPK', function() {
    it('should create an instance of ProjectAnalysisJobPK', function() {
      // uncomment below and update the code to test ProjectAnalysisJobPK
      //var instane = new Bouquet.ProjectAnalysisJobPK();
      //expect(instance).to.be.a(Bouquet.ProjectAnalysisJobPK);
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new Bouquet.ProjectAnalysisJobPK();
      //expect(instance).to.be();
    });

    it('should have the property analysisJobId (base name: "analysisJobId")', function() {
      // uncomment below and update the code to test the property analysisJobId
      //var instane = new Bouquet.ProjectAnalysisJobPK();
      //expect(instance).to.be();
    });

  });

}));