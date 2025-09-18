require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');

// Correctly require your single route file
const userRoutes = require('./routes/userRoutes');

// Connect to Database
connectDB();

const app = express();

// Core Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
const API_PREFIX = '/api/v1';
// Direct all API traffic starting with /api/v1 to your userRoutes file
app.use(API_PREFIX, userRoutes);

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public')));

// Frontend page routes
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'public', 'register.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'public', 'login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});