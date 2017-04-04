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
    instance = new Bouquet.ExpressionSuggestion();
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

  describe('ExpressionSuggestion', function() {
    it('should create an instance of ExpressionSuggestion', function() {
      // uncomment below and update the code to test ExpressionSuggestion
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be.a(Bouquet.ExpressionSuggestion);
    });

    it('should have the property suggestions (base name: "suggestions")', function() {
      // uncomment below and update the code to test the property suggestions
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

    it('should have the property definitions (base name: "definitions")', function() {
      // uncomment below and update the code to test the property definitions
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

    it('should have the property validateMessage (base name: "validateMessage")', function() {
      // uncomment below and update the code to test the property validateMessage
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

    it('should have the property filterIndex (base name: "filterIndex")', function() {
      // uncomment below and update the code to test the property filterIndex
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

    it('should have the property beginInsertPos (base name: "beginInsertPos")', function() {
      // uncomment below and update the code to test the property beginInsertPos
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

    it('should have the property endInsertPos (base name: "endInsertPos")', function() {
      // uncomment below and update the code to test the property endInsertPos
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

    it('should have the property filter (base name: "filter")', function() {
      // uncomment below and update the code to test the property filter
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

    it('should have the property valueType (base name: "valueType")', function() {
      // uncomment below and update the code to test the property valueType
      //var instane = new Bouquet.ExpressionSuggestion();
      //expect(instance).to.be();
    });

  });

}));
