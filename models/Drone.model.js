const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  propellers : Number,
  maxSpeed : Number
});

const droneModel = mongoose.model("Drones", droneSchema);

module.exports = droneModel;