const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        productName: String,
        productDetails: String,
        productPrice: Number,
        image_url: String
    }
)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;