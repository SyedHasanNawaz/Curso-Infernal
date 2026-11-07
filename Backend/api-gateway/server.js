const express = require('express');
const cors = require('cors');

const productRoutes = require('./Routes/productRoutes');
const categoryRoutes = require('./Routes/categoryRoutes');

const app = express();

app.use(cors());

app.use('/products', productRoutes);
app.use('/category', categoryRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
