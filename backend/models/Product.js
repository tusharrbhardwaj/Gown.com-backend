const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],
        min: [0, 'Price cannot be negative']
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true
    },
    image: {
        type: String,
        required: [true, 'Product image URL is required']
    },
    category: {
        type: String,
        default: 'Gown'
    },
    inStock: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);