// This is your test secret API key.
import stripe from 'stripe';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(cors());

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripeInstance.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1O8MnwLomV5ZI3ZXGWMIQegh',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  res.setHeader('Content-Type', 'application/json'); // Set the Content-Type
  res.send({clientSecret: session.client_secret});
});

// Create an API route to provide the public API key
app.get('/get-public-key', (req, res) => {
  res.json({ publicApiKey: process.env.STRIPE_PUBLIC_KEY });
});


app.get('/session-status', async (req, res) => {
  const session = await stripeInstance.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));