const express = require('express');
const connectDB = require('./configs/db.config');

// Importing routes
const transactionRoutes = require('./routes/transactions.routes'); //transaction routes

// connectDB();

const app = express();

// Middlewares
app.use(express.json());


// Using routes
app.get('/', (req, res) => {
    res.send('This is LannisterPay... A Lannister always pays his debts');
});
app.use('/split-payments/compute', transactionRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`app is runnig on port ${PORT}`))
