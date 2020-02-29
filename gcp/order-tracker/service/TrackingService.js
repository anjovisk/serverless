'use strict';

const Tracking = require('../models/trackings');


/**
 * Obtém o rastreamento de um pedido
 * Lista as movimentações de um pedido de acordo com o código de rastreamento
 *
 * trackingCode String Código de rastreamento para obter as movimentações
 * returns List
 **/
exports.findByTrackingCode = function (trackingCode) {
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

