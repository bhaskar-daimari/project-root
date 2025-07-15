// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  option: { type: String },
  image: { type: String },
  description: { type: String },
  category: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Product', productSchema);
