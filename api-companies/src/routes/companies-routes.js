'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/companies-controller');
const authService = require('../services/auth-service')

router.get('/', authService.authorize, controller.filter)
router.get('/:id', authService.authorize, controller.listOne);

module.exports = router;
