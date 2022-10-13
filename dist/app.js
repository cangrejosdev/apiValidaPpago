"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _apiVip_Routes = _interopRequireDefault(require("../src/routes/apiVip_Routes"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

//Extender : https://swaggeer.io/specification/#infoObject
var swaggerUi = require("swagger-ui-express"),
    swaggerDocument = require("./swagger.json");

var app = (0, _express["default"])(); // settings

app.set("port", _config["default"].port); // Middlewares

app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", _apiVip_Routes["default"]);
var _default = app;
exports["default"] = _default;