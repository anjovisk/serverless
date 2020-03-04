'use strict';
var ObjectId = require('mongoose').Types.ObjectId;
const uuid = require('uuid');
const Order = require('../models/orders');
//const Tracking = require('../models/orders');

/**
 * Adiciona um novo pedido para rastreamento.
 *
 * body Order Pedido que será rastreado.
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.addOrder = function (body, api_key) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    try {
      var order = new Order(body);
      order.trackingNumber = uuid.v4();
      order.registrationDate = new Date();
      console.log('Salvando:');
      console.log(order);
      order.save(function (err) {
        if (err) {
          console.log(err);
          resolve();
        } else {
          console.log(JSON.stringify(order));
          resolve(order);
        }
      });
    } catch (e) {
      console.log(e);
      resolve();
    }
  });
}


/**
 * Remove um pedido
 *
 * orderId String Id do pedido que será excluído
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteOrder = function (orderId, api_key) {
  return new Promise(function (resolve, reject) {
    Order.findOneAndRemove({ _id: new ObjectId(orderId) }).exec(function (err) {
      if (err) {
        console.log(err);
      }
      resolve();
    });
  });
}


/**
 * Obtém um pedido pelo id
 * Retorna um único pedido
 *
 * orderId String Id do pedido
 * api_key String  (optional)
 * returns Order
 **/
exports.getOrderById = function (orderId, api_key) {
  return new Promise(function (resolve, reject) {
    console.log('getting order... ' + orderId);
    Order.findOne({ _id: new ObjectId(orderId) }).exec(function (err, order) {
      if (err) {
        console.log(err);
      } else {
        resolve(order);
      }
    });
  });
}


/**
 * Atualiza as informações de um pedido.
 *
 * orderId String Id do pedido
 * body Order Pedido que será rastreado.
 * api_key String  (optional)
 * returns Order
 **/
exports.updateOrder = function (orderId, body, api_key) {
  return new Promise(function (resolve, reject) {
    console.log('updating order...' + orderId);
    Order.findOne({ _id: new ObjectId(orderId) }).exec(function (err, order) {
      if (err) {
        console.log(err);
      } else {
        if (order) {
          order.orderNumber = body.orderNumber;
          order.save(function (err) {
            if (err) {
              console.log(err);
              resolve();
            } else {
              resolve(updatedOrder);
            }
          });
        } else {
          resolve();
        }
      }
    });
  });
}

exports.addTracking = function (orderId, body, api_key) {
  return new Promise(function (resolve, reject) {
    console.log('updating order...' + orderId);
    Order.findOne({ _id: new ObjectId(orderId) }).exec(function (err, order) {
      if (err) {
        console.log(err);
      } else {
        if (order) {
          var tracking = order.trackings.create(body);
          order.trackings.push(tracking);
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