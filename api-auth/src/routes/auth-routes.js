'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth-controller');

router.post('/sign_in', controller.authenticate)

module.exports = router;
