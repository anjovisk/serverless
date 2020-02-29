'use strict';


/**
 * Adiciona um novo pedido para rastreamento.
 *
 * body Order Pedido que será rastreado.
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.addOrder = function(body,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove um pedido
 *
 * orderNumber String Número do pedido que será excluído
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteOrder = function(orderNumber,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Obtém um pedido pelo número
 * Retorna um único pedido
 *
 * orderNumber String Número do pedido
 * api_key String  (optional)
 * returns Order
 **/
exports.getOrderById = function(orderNumber,api_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "orderNumber" : "orderNumber",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "recipient" : {
    "address" : {
      "number" : "number",
      "city" : "city",
      "street" : "street",
      "postalCode" : "postalCode",
      "state" : "state",
      "complement" : "complement"
    },
    "document" : "document",
    "name" : "name"
  },
  "trackingCode" : "trackingCode",
  "registryDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "posted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Atualiza as informações de um pedido.
 *
 * orderNumber String Número do pedido
 * body Order Pedido que será rastreado.
 * api_key String  (optional)
 * returns Order
 **/
exports.updateOrder = function(orderNumber,body,api_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "orderNumber" : "orderNumber",
  "lastUpdate" : "2000-01-23T04:56:07.000+00:00",
  "recipient" : {
    "address" : {
      "number" : "number",
      "city" : "city",
      "street" : "street",
      "postalCode" : "postalCode",
      "state" : "state",
      "complement" : "complement"
    },
    "document" : "document",
    "name" : "name"
  },
  "trackingCode" : "trackingCode",
  "registryDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "posted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

