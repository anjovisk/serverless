'use strict';
var ObjectId = require('mongoose').Types.ObjectId;
const Order = require('../models/orders');

/**
 * Adiciona uma movimentação
 *
 * orderId String Id do pedido
 * body Tracking Pedido que será rastreado.
 * api_key String  (optional)
 * returns Tracking
 **/
exports.addTracking = function (orderId, body, api_key) {
  return new Promise(function (resolve, reject) {
    console.log('updating tracking...' + orderId);
    Order.findOne({ _id: new ObjectId(orderId) }).exec(function (err, order) {
      if (err) {
        console.log(err);
      } else {
        if (order) {
          console.log(body);
          if (!order.movements) {
            order.movements = [];
          }
          console.log(order.movements);
          var tracking = order.movements.create(body);
          order.movements.push(tracking);
          order.save(function (err) {
            if (err) {
              console.log(err);
              resolve();
            } else {
              resolve(tracking);
            }
          });
        } else {
          resolve();
        }
      }
    });
  });
}


/**
 * Obtém as movimentações de um pedido
 * Retorna uma lista de movimentações
 *
 * orderId String Id do pedido
 * api_key String  (optional)
 * returns List
 **/
exports.getTrackings = function (orderId, api_key) {
  return new Promise(function (resolve, reject) {
    console.log('gettings trackings...' + orderId);
    Order.findOne({ _id: new ObjectId(orderId) }).exec(function (err, order) {
      let movements = [];
      if (err) {
        console.log(err);
      } else {
        if (order) {
          if (order.movements) {
            movements = order.movements;
          }
        }
      }
      resolve(movements);
    });
  });
}

exports.getTrackingsByTrackingNumber = function (trackingNumber) {
  return new Promise(function (resolve, reject) {
    console.log('gettings tracking...' + trackingNumber);
    Order.findOne({ trackingNumber: trackingNumber }).exec(function (err, order) {
      let movements = [];
      if (err) {
        console.log(err);
      } else {
        if (order) {
          if (order.movements) {
            movements = order.movements;
          }
        }
      }
      resolve(movements);
    });
  });
}