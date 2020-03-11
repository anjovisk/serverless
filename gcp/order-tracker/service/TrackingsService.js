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
          order.lastUpdate = new Date();
          console.log(body);
          if (!order.movements) {
            order.movements = [];
          }
          console.log(order.movements);
          var tracking = order.movements.create(body);
          order.movements.push(tracking);
          switch (tracking.movement) {
            case "MOVEMENT":
              if (order.status == "POSTED")
                order.status = "ON_ROUTE";
              else if (order.status == "DELIVERY_FAILED")
                order.status = "RETURNING";
              break;
            case "OUT_FOR_DELIVERY":
              if ((order.status == "ON_ROUTE") || (order.status == "DELIVERY_FAILED"))
                order.status = "OUT_FOR_DELIVERY";
              break;
            case "DELIVERY_FAILED":
              if (order.status == "OUT_FOR_DELIVERY")
                order.status = "DELIVERY_FAILED";
              break;
            case "DELIVERED":
              if (order.status == "OUT_FOR_DELIVERY")
                order.status = "DELIVERED";
              break;
            case "RETURNED":
              if (order.status == "RETURNING")
                order.status = "RETURNED";
              break;
          }
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