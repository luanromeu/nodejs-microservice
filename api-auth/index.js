'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { API_AUTH_PORT, API_VERSION } = require('../config');

app.use(bodyParser.json({
  limit: '10mb'
}));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header ('Access-Control-Allow-Credentials'), true
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

//#region  load db
const db = require('./db');
//#endregion

//#region load models
const usermodel = require('./src/models/users-models');
//#endregion

//#region mapping routes
const authroutes = require('./src/routes/auth-routes');
//#endregion

app.use(`/api/${API_VERSION}/users/auth`, authroutes)

app.listen(API_AUTH_PORT, 
    () => console.log(`Auth API listening on port ${API_AUTH_PORT}!`));


module.exports = app;