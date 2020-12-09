const mongoose = require("mongoose");
const { Schema } = mongoose;

const grapeSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
});

const Grape = mongoose.model("Grape", grapeSchema);

module.exports = { Grape };
