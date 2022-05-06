const express = require('express');
const router = express.Router();
const CarController = require('../controllers/carController');

router.get('/list', CarController.carList);
router.post('/add', CarController.addCar);
router.delete('/:id', CarController.deleteCar);

module.exports = router;