const Vehicle = require('../models/Vehicle');

// Get all vehicles
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new vehicle
exports.addVehicle = async (req, res) => {
  const { brand, model, year, pricePerDay, image } = req.body;
  try {
    const vehicle = new Vehicle({ brand, model, year, pricePerDay, image });
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
