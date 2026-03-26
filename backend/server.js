const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const { seedProducts } = require('./controllers/productController');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGINS || '*',
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';
const DB_NAME = process.env.DB_NAME || 'gowndotcom';

mongoose.connect(`${MONGO_URL}/${DB_NAME}`)
    .then(async () => {
        console.log('Connected to MongoDB');
        // Seed products if database is empty
        await seedProducts();
    })
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/payment', paymentRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Gowndotcom API is running' });
});

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Gowndotcom API' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
