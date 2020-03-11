'use strict'
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { API_COMPANIES_PORT, API_VERSION } = require('../config');


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

//#region load db
const db = require('./db');
//#endregion

//#region load models
const companiesModel = require('./src/models/companies-models')
const companiesAddressModel = require('./src/models/companies-adrress-models')
const companiesSituationModel = require('./src/models/companies-situation-models')
const companiesFramingModel = require('./src/models/companies-framing-models')
//#endregion

//#region mapping routes
const companiesroutes = require('./src/routes/companies-routes');
//#endregion

app.use(`/api/${API_VERSION}/enterprises`, companiesroutes)

app.listen(API_COMPANIES_PORT, 
    () => console.log(`Companies API listening on port ${API_COMPANIES_PORT}!`));


module.exports = app;