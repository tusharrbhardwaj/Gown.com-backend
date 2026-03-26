// Simulated Payment Controller
// Note: This is a simulation - no actual payment processing

exports.processPayment = async (req, res) => {
    try {
        const { cardholderName, cardNumber, expiryDate, cvv, amount, items } = req.body;
        
        // Validate required fields
        if (!cardholderName || !cardNumber || !expiryDate || !cvv || !amount) {
            return res.status(400).json({ 
                success: false, 
                message: 'All payment fields are required' 
            });
        }
        
        // Simulate card validation (basic format check)
        const cardNumberClean = cardNumber.replace(/\s/g, '');
        if (cardNumberClean.length < 13 || cardNumberClean.length > 19) {
            return res.status(400).json({ 
                success: false, 
                message: 'Invalid card number' 
            });
        }
        
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Generate simulated order ID
        const orderId = 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        
        // Simulated successful response
        res.json({
            success: true,
            message: 'Payment processed successfully!',
            orderId: orderId,
            amount: amount,
            items: items || [],
            timestamp: new Date().toISOString(),
            note: 'This is a simulated payment - no actual charge was made.'
        });
        
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Payment processing failed', 
            error: error.message 
        });
    }
};