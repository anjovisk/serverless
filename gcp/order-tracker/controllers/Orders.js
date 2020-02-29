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
      utils.writeJson(res, response);
    });
};

module.exports.deleteOrder = function deleteOrder (req, res, next) {
  var orderNumber = req.swagger.params['orderNumber'].value;
  var api_key = req.swagger.params['api_key'].value;
  Orders.deleteOrder(orderNumber,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOrderById = function getOrderById (req, res, next) {
  var orderNumber = req.swagger.params['orderNumber'].value;
  var api_key = req.swagger.params['api_key'].value;
  Orders.getOrderById(orderNumber,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateOrder = function updateOrder (req, res, next) {
  var orderNumber = req.swagger.params['orderNumber'].value;
  var body = req.swagger.params['body'].value;
  var api_key = req.swagger.params['api_key'].value;
  Orders.updateOrder(orderNumber,body,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
