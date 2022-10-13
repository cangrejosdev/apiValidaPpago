"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _apiVip_controller = require("../controllers/apiVip_controller");

//Controlador de RutaS
var router = (0, _express.Router)(); // Routes

/** 
 * @swagger
 * tags:
 *  name: DatosOper
 *  description: Datos del Operador del Operador
 *  /api/operadorppago/:cedulaOperador
 *  get: 
 *      tags: [DatosOper]
 */
//Ruta de Validacion de Operadores para 

router.get('/operadorppago/:cedulaOperador', _apiVip_controller.getOperador); //Ruta de Inserseciion de Pagos

router.get('/insertarppago/:id/:fecha/:operador/:monto/:cliente', _apiVip_controller.getPagos);
var _default = router;
exports["default"] = _default;