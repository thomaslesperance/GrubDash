const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const ordersRouter = require("./orders/orders.router");
const dishesRouter = require("./dishes/dishes.router");

const app = express();

// The following line let's this API be used by any website.
app.use(cors());
app.use(express.json());

app.use("/dishes", dishesRouter);
app.use("/orders", ordersRouter);

app.use(notFound);

app.use(errorHandler);

module.exports = app;

////API SCHEMA////
//
//Dishes routes
//GET       /dishes
//POST      /dishes
//GET       /dishes/:dishId
//PUT       /dishes/:dishId
//
//Orders routes
//GET       /orders
//POST      /orders
//GET       /orders/:orderId
//PUT       /orders/:orderId
//DELETE    /orders/:orderId
////////////////////////////
