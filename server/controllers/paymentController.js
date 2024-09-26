const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Process Stripe Payment
exports.processPayment = async (req, res) => {
  const { amount, token } = req.body;
  try {
    const payment = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token.id,
      description: 'Car Rental Payment',
    });
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json(error);
  }
};
