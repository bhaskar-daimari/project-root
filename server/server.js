const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);        // Signup, Login, etc.
app.use('/api', protectedRoutes);        // Authenticated user routes
app.use('/api/admin', adminRoutes);      // Admin-only routes

// Health check or fallback
app.get('/', (req, res) => {
  res.send('Server is running 🎉');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
