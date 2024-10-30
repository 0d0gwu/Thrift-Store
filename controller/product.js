const Products = require('../models/Products.js');

module.exports = async(req, res)=>{
    try{
        const products = await Products.find()
        res.render('product', {products})
    }
    catch(error){
        res.status(500).send('Error fetching products');
        console.log(error);
    }
}