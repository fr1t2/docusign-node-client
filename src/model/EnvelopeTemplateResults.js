/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EnvelopeTemplate', 'model/Folder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EnvelopeTemplate'), require('./Folder'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EnvelopeTemplateResults = factory(root.Docusign.ApiClient, root.Docusign.EnvelopeTemplate, root.Docusign.Folder);
  }
}(this, function(ApiClient, EnvelopeTemplate, Folder) {
  'use strict';


  /**
   * The EnvelopeTemplateResults model module.
   * @module model/EnvelopeTemplateResults
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>EnvelopeTemplateResults</code>.
   * @alias module:model/EnvelopeTemplateResults
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>EnvelopeTemplateResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvelopeTemplateResults} obj Optional instance to populate.
   * @return {module:model/EnvelopeTemplateResults} The populated <code>EnvelopeTemplateResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('endPosition')) {
        obj['endPosition'] = ApiClient.convertToType(data['endPosition'], 'String');
      }
      if (data.hasOwnProperty('envelopeTemplates')) {
        obj['envelopeTemplates'] = ApiClient.convertToType(data['envelopeTemplates'], [EnvelopeTemplate]);
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], [Folder]);
      }
      if (data.hasOwnProperty('nextUri')) {
        obj['nextUri'] = ApiClient.convertToType(data['nextUri'], 'String');
      }
      if (data.hasOwnProperty('previousUri')) {
        obj['previousUri'] = ApiClient.convertToType(data['previousUri'], 'String');
      }
      if (data.hasOwnProperty('resultSetSize')) {
        obj['resultSetSize'] = ApiClient.convertToType(data['resultSetSize'], 'String');
      }
      if (data.hasOwnProperty('startPosition')) {
        obj['startPosition'] = ApiClient.convertToType(data['startPosition'], 'String');
      }
      if (data.hasOwnProperty('totalSetSize')) {
        obj['totalSetSize'] = ApiClient.convertToType(data['totalSetSize'], 'String');
      }
    }
    return obj;
  }

  /**
   * The last position in the result set. 
   * @member {String} endPosition
   */
  exports.prototype['endPosition'] = undefined;
  /**
   * The list of requested templates.
   * @member {Array.<module:model/EnvelopeTemplate>} envelopeTemplates
   */
  exports.prototype['envelopeTemplates'] = undefined;
  /**
   * 
   * @member {Array.<module:model/Folder>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   * The URI to the next chunk of records based on the search request. If the endPosition is the entire results of the search, this is null. 
   * @member {String} nextUri
   */
  exports.prototype['nextUri'] = undefined;
  /**
   * The postal code for the billing address.
   * @member {String} previousUri
   */
  exports.prototype['previousUri'] = undefined;
  /**
   * The number of results returned in this response. 
   * @member {String} resultSetSize
   */
  exports.prototype['resultSetSize'] = undefined;
  /**
   * Starting position of the current result set.
   * @member {String} startPosition
   */
  exports.prototype['startPosition'] = undefined;
  /**
   * The total number of items available in the result set. This will always be greater than or equal to the value of the property returning the results in the in the response.
   * @member {String} totalSetSize
   */
  exports.prototype['totalSetSize'] = undefined;



  return exports;
}));


