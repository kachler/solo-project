const mongoose = require('mongoose');
require('dotenv').config();

const { Schema } = mongoose;

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
const whiskeySchema = new Schema({
  // Schema
  distilleryName: { type: String, required: true },
  whiskeyName: { type: String, required: true },
  note: { type: String, default: Date.now },
  rating: { type: Number, required: true },
  country: String,
  region: String,
});

const Whiskey = mongoose.model('whiskey', whiskeySchema);

module.exports = Whiskey;
