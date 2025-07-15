const express = require('express');
const bcrypt = require('bcryptjs');
const { authMiddleware, adminOnly } = require('../middleware/authMiddleware');
const Product = require('../models/Product');
const User = require('../models/User');

const router = express.Router();

// --- Product Routes ---

// GET all products
router.get('/products', authMiddleware, adminOnly, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ msg: 'Server error fetching products' });
  }
});

// POST add product
router.post('/products', authMiddleware, adminOnly, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ msg: 'Server error adding product' });
  }
});

// DELETE product
router.delete('/products/:id', authMiddleware, adminOnly, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Product deleted' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ msg: 'Server error deleting product' });
  }
});

// PUT update product
router.put('/products/:id', authMiddleware, adminOnly, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ msg: 'Server error updating product' });
  }
});

// --- User Routes ---

// GET all users (exclude password)
router.get('/users', authMiddleware, adminOnly, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ msg: 'Server error fetching users' });
  }
});

// POST add new user with hashed password
router.post('/users', authMiddleware, adminOnly, async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    const userToReturn = { _id: newUser._id, email: newUser.email, role: newUser.role };
    res.status(201).json(userToReturn);
  } catch (err) {
    console.error('Error adding user:', err);
    res.status(500).json({ msg: 'Server error adding user' });
  }
});

// PUT update user (e.g., change role)
router.put('/users/:id', authMiddleware, adminOnly, async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select('-password');
    res.json(updatedUser);
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ msg: 'Server error updating user' });
  }
});

// DELETE user
router.delete('/users/:id', authMiddleware, adminOnly, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ msg: 'Server error deleting user' });
  }
});

module.exports = router;
