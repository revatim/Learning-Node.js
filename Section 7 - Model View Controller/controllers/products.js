// const adminData = require('../models/products_model')
const Product = require('../models/product'); // convention capital
exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
  // adminData.products.push( { title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProductList = (req, res, next) => {
    res.render('shop', {
        product_list: Product.fetchAll(),
        docTitle: 'Shop',
        path: '/',
        pageTitle: 'Shop',
        activeShop: true,
        productCSS: true,
    });

};