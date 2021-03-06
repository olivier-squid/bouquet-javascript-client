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
    instance = new Bouquet.DatabaseApi();
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

  describe('DatabaseApi', function() {
    describe('getDatabaseStatus', function() {
      it('should call getDatabaseStatus successfully', function(done) {
        //uncomment below and update the code to test getDatabaseStatus
        //instance.getDatabaseStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readSchema', function() {
      it('should call readSchema successfully', function(done) {
        //uncomment below and update the code to test readSchema
        //instance.readSchema(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readSchemas', function() {
      it('should call readSchemas successfully', function(done) {
        //uncomment below and update the code to test readSchemas
        //instance.readSchemas(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readTable', function() {
      it('should call readTable successfully', function(done) {
        //uncomment below and update the code to test readTable
        //instance.readTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refreshTable', function() {
      it('should call refreshTable successfully', function(done) {
        //uncomment below and update the code to test refreshTable
        //instance.refreshTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
