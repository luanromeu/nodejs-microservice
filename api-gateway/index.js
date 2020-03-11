'use strict'
const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');


app.use(logger('dev'));
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cookieParser());
let { 
    API_AUTH, 
    API_COMPANIES,
    API_VERSION,
    API_GATEWAY_PORT
} = require('../config');

const authServiceProxy = httpProxy(API_AUTH);
const companiesServiceProxy = httpProxy(API_COMPANIES);

app.get('/', (req, res) => res.send('Hello Gateway API'));

//#region proxy api-auth
app.post(`/api/${API_VERSION}/users/*`, (req, res, next) => authServiceProxy(req, res, next));
//#endregion

//#region  proxy api-companies
app.get(`/api/${API_VERSION}/enterprises/*`, (req, res, next) => companiesServiceProxy(req, res, next));
app.get(`/api/${API_VERSION}/enterprises`, (req, res, next) => companiesServiceProxy(req, res, next));
//#endregion

app.listen(API_GATEWAY_PORT, 
    () => console.log(`Gateway API listening on port ${API_GATEWAY_PORT}!`));