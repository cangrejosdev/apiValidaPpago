"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPagos = exports.getOperador = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _conection = require("../database/conection");

//  End point de Validacion de operadores
//  Parametros de entrada : cedulaOperador
//  Salida:
//
//  {
//    "Unidad": "V254",
//    "Operador#": 234,
//    "Cedula": "8-708-2127",
//    "cedulaNspace": "87082127",
//    "Nombres": "FIELDS NUÑEZ ARIEL ALEXANDER",
//    "ung": "VCOMP",
//    "pago_minimo": 5
//  }
//
//  Pablo Luces
var getOperador = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var cedulaop, pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            cedulaop = req.params.cedulaOperador;
            _context.next = 4;
            return (0, _conection.getConnection)();

          case 4:
            pool = _context.sent;
            _context.next = 7;
            return pool.request().query("valida_op_api_ppago ".concat(cedulaop));

          case 7:
            result = _context.sent;
            res.json(result.recordset);
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500);
            res.send(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getOperador(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // Enpoint de Insercion de Pagos en la tabla Pagos 
//  Parametros de entrada : Id,fecha,operador,monto,cliente 
//  Salida:
//
//{"mensaje":"Pago Insertdado Fecha Hora: Oct 9 2022 12:47PM"}
//
//  Pablo Luces


exports.getOperador = getOperador;

var getPagos = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, fecha, operador, monto, cliente, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Consulta a la base de datos que inserta cada pago
            id = req.params.id;
            fecha = req.params.fecha;
            operador = req.params.operador;
            monto = req.params.monto;
            cliente = req.params.cliente;
            _context2.next = 7;
            return (0, _conection.getConnection)();

          case 7:
            pool = _context2.sent;
            _context2.next = 10;
            return pool.request().query("inserta_ppagos_api '".concat(id, "', '").concat(fecha, "','").concat(operador, "','").concat(monto, "','").concat(cliente, "'"));

          case 10:
            result = _context2.sent;
            res.send(JSON.stringify(result.recordset));
            console.log(result.recordset);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPagos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPagos = getPagos;