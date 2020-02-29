'use strict';

const Tracking = require('../models/trackings');

/**
 * Adiciona uma movimentação
 *
 * orderNumber String Número do pedido
 * body Tracking Pedido que será rastreado.
 * api_key String  (optional)
 * returns Tracking
 **/
exports.addTracking = function (orderNumber, body, api_key) {
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
}


/**
 * Obtém as movimentações de um pedido
 * Retorna uma lista de movimentações
 *
 * orderNumber String Número do pedido
 * api_key String  (optional)
 * returns List
 **/
exports.getTrackings = function (orderNumber, api_key) {
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
}

