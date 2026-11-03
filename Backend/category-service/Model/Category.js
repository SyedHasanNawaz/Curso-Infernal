const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  }
}, { timestamps: true });


const Category = mongoose.model('Category', CategorySchema);

CategorySchema.pre('findOneAndDelete', async function (next) {
  console.log('🛠️ Middleware running for findOneAndDelete');

  try {
    const docToDelete = await this.model.findOne(this.getQuery());
    if (!docToDelete) return next();

    const Products = mongoose.model('Products');
    const productCount = await Products.countDocuments({
      category: docToDelete._id
    });

    console.log('Product count:', productCount);

    if (productCount > 0) {
      return next(new Error(
        `Cannot delete category - it has ${productCount} associated products.`
      ));
    }

    next();
  } catch (err) {
    next(err);
  }
});


module.exports = Category;