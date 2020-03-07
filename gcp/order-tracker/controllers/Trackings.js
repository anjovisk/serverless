'use strict';

var utils = require('../utils/writer.js');
var Trackings = require('../service/TrackingsService');

module.exports.addTracking = function addTracking (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  var body = req.swagger.params['body'].value;
  var api_key = req.swagger.params['api_key'].value;
  Trackings.addTracking(orderId,body,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.getTrackings = function getTrackings (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Trackings.getTrackings(orderId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.findByTrackingNumber = function getTrackings (req, res, next) {
  var trackingNumber = req.swagger.params['trackingNumber'].value;
  Trackings.getTrackingsByTrackingNumber(trackingNumber)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
