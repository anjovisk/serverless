'use strict';
var ObjectId = require('mongoose').Types.ObjectId;
const Order = require('../models/orders');

//const Tracking = require('../models/trackings');

/**
 * Adiciona uma movimentação
 *
 * orderNumber String Número do pedido
 * body Tracking Pedido que será rastreado.
 * api_key String  (optional)
 * returns Tracking
 **/
/* exports.addTracking = function (orderNumber, body, api_key) {
  return new Promise(function (resolve, reject) {
    console.log(body);
    try {
      var newTracking = new Tracking(body);
      newTracking.trackingId = orderNumber;
      console.log('Salvando:');
      console.log(newTracking);
      newTracking.save(function (err) {
        if (err) {
          console.log(err);
          resolve();
        } else {
          console.log(JSON.stringify(newTracking));
          resolve(newTracking);
        }
      });
    } catch (e) {
      console.log(e);
    }
  });
} */


/**
 * Obtém as movimentações de um pedido
 * Retorna uma lista de movimentações
 *
 * orderNumber String Número do pedido
 * api_key String  (optional)
 * returns List
 **/
/* exports.getTrackings = function (orderNumber, api_key) {
  return new Promise(function (resolve, reject) {
    console.log('listing trackings...');
    Tracking.find({ trackingId: trackingCode}).exec(function (err, trackings) {
      if (err) {
        console.log(err);
      } else {
        console.log(trackings);
        if (Object.keys(trackings).length > 0) {
          resolve(trackings);
        } else {
          resolve();
        }
      }
    });
  });
} */

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

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
          console.log('instanciando novo tracking');
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
    var examples = {};
    examples['application/json'] = [{
      "date": "2000-01-23T04:56:07.000+00:00",
      "details": "details",
      "movement": "POSTED"
    }, {
      "date": "2000-01-23T04:56:07.000+00:00",
      "details": "details",
      "movement": "POSTED"
    }];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}