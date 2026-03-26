const Product = require('../models/Product');

// Sample products for seeding
const sampleProducts = [
    {
        name: 'Elegant White Wedding Gown',
        price: 2499,
        description: 'A stunning white wedding gown featuring intricate lace detailing, a fitted bodice, and a flowing A-line skirt. Perfect for the modern bride who wants timeless elegance.',
        image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=800',
        category: 'Wedding'
    },
    {
        name: 'Royal Blue Evening Gown',
        price: 899,
        description: 'Make a statement in this gorgeous royal blue evening gown. Features a V-neckline, fitted waist, and elegant floor-length silhouette with subtle shimmer.',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800',
        category: 'Evening'
    },
    {
        name: 'Vintage Lace Bridal Gown',
        price: 1899,
        description: 'Embrace vintage charm with this beautiful lace bridal gown. Features delicate long sleeves, a modest neckline, and a graceful train.',
        image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
        category: 'Wedding'
    },
    {
        name: 'Red Carpet Glamour Gown',
        price: 1299,
        description: 'Turn heads in this show-stopping red gown designed for special occasions. Features a dramatic silhouette with elegant draping.',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
        category: 'Evening'
    },
    {
        name: 'Champagne Ball Gown',
        price: 1599,
        description: 'A fairytale champagne ball gown with a full tulle skirt and embroidered bodice. Perfect for making your special day magical.',
        image: 'https://images.unsplash.com/photo-1614750880774-6e5cb149607b?w=800',
        category: 'Wedding'
    },
    {
        name: 'Emerald Green Formal Gown',
        price: 799,
        description: 'An enchanting emerald green formal gown with a flattering fit-and-flare silhouette. Ideal for galas and formal events.',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800',
        category: 'Evening'
    }
];

// Seed products
exports.seedProducts = async () => {
    try {
        const count = await Product.countDocuments();
        if (count === 0) {
            await Product.insertMany(sampleProducts);
            console.log('Sample products seeded successfully');
        }
    } catch (error) {
        console.error('Error seeding products:', error);
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}, { __v: 0 });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

// Get single product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id, { __v: 0 });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};

// Create new product
exports.createProduct = async (req, res) => {
    try {
        const { name, price, description, image, category } = req.body;
        
        const product = new Product({
            name,
            price,
            description,
            image,
            category: category || 'Gown'
        });
        
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error: error.message });
    }
};

// Update product
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error: error.message });
    }
};

// Delete product
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
};