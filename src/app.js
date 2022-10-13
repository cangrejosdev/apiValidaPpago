import express from "express";
import cors from "cors";
import apiVipRoutes from "../src/routes/apiVip_Routes";
import morgan from "morgan";

import config from "./config";




//Extender : https://swaggeer.io/specification/#infoObject


 
const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("./swagger.json");

const app = express();

// settings
app.set("port", config.port);


// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );

app.use("/api",apiVipRoutes)

export default app;