const Products = require('../models/Products.js')

module.exports = async (req, res)=>{
    try{
        const products = await Products.find({}); // Await the promise to get actual data
        res.render('index', { products }); // Pass the array to the EJS template
        console.log(req.session);
    }catch(error){
        res.status(500).send('Error fetching products');
        console.error(error);
    }
}