const express = require('express');
const { getVehicles, addVehicle } = require('../controllers/vehicleController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getVehicles);
router.post('/', protect, addVehicle);

module.exports = router;
