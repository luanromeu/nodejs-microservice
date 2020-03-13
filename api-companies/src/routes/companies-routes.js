'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/companies-controller');

router.get('/', controller.filter)
router.get('/:id', controller.listOne);

module.exports = router;
