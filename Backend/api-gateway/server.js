const express = require('express');
const cors = require('cors');

const productRoutes = require('./Routes/productRoutes');
const categoryRoutes = require('./Routes/categoryRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const orderRoutes = require('./Routes/orderRoutes');
const { requireAuthorization, requireAuthentication } = require('./authMiddleware');

const app = express();

app.use(cors());

app.use('/products', productRoutes);
app.use('/category', categoryRoutes);
app.use('/admin', adminRoutes);
app.use('/orders', orderRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
