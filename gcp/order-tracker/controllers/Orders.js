'use strict';

var utils = require('../utils/writer.js');
var Orders = require('../service/OrdersService');

module.exports.addOrder = function addOrder (req, res, next) {
  var body = req.swagger.params['body'].value;
  var api_key = req.swagger.params['api_key'].value;
  Orders.addOrder(body,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 405);
    });
};

module.exports.deleteOrder = function deleteOrder (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Orders.deleteOrder(orderId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Orders.getOrderById(orderId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.updateOrder = function updateOrder (req, res, next) {
  var orderId = req.swagger.params['orderId'].value;
  var body = req.swagger.params['body'].value;
  var api_key = req.swagger.params['api_key'].value;
  Orders.updateOrder(orderId,body,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
