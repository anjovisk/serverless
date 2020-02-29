'use strict';

var utils = require('../utils/writer.js');
var Trackings = require('../service/TrackingsService');

module.exports.addTracking = function addTracking (req, res, next) {
  var orderNumber = req.swagger.params['orderNumber'].value;
  var body = req.swagger.params['body'].value;
  var api_key = req.swagger.params['api_key'].value;
  Trackings.addTracking(orderNumber,body,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTrackings = function getTrackings (req, res, next) {
  var orderNumber = req.swagger.params['orderNumber'].value;
  var api_key = req.swagger.params['api_key'].value;
  Trackings.getTrackings(orderNumber,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
