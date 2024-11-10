const express = require('express');
const router = express.Router();
const { submitName } = require('../controllers/nameController');
const { calculateBMIHandler } = require('../controllers/bmiController');

// Route cho endpoint /submit
router.post('/submit', submitName);

// Route cho endpoint /bmi
router.post('/bmi', calculateBMIHandler);

module.exports = router;


