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
    instance = new Bouquet.AttributesApi();
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

  describe('AttributesApi', function() {
    describe('deleteAttribute', function() {
      it('should call deleteAttribute successfully', function(done) {
        //uncomment below and update the code to test deleteAttribute
        //instance.deleteAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAccessRightsAttribute', function() {
      it('should call readAccessRightsAttribute successfully', function(done) {
        //uncomment below and update the code to test readAccessRightsAttribute
        //instance.readAccessRightsAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAttribute', function() {
      it('should call readAttribute successfully', function(done) {
        //uncomment below and update the code to test readAttribute
        //instance.readAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAttributes', function() {
      it('should call readAttributes successfully', function(done) {
        //uncomment below and update the code to test readAttributes
        //instance.readAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storeAccessRights', function() {
      it('should call storeAccessRights successfully', function(done) {
        //uncomment below and update the code to test storeAccessRights
        //instance.storeAccessRights(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storeAttribute', function() {
      it('should call storeAttribute successfully', function(done) {
        //uncomment below and update the code to test storeAttribute
        //instance.storeAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('storeAttribute2', function() {
      it('should call storeAttribute2 successfully', function(done) {
        //uncomment below and update the code to test storeAttribute2
        //instance.storeAttribute2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAttribute', function() {
      it('should call updateAttribute successfully', function(done) {
        //uncomment below and update the code to test updateAttribute
        //instance.updateAttribute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));