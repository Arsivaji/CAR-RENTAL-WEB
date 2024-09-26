const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  pricePerDay: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
