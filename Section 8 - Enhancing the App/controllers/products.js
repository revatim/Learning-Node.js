const Product = require('../models/product'); 
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
    });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title, req.body.imageUrl, req.body.details, req.body.price);
  product.save();
  res.redirect('/');
};

exports.getProductList = (req, res, next) => {
	Product.fetchAll( products => {
			res.render('admin/products', {
	        product_list: products,
	        docTitle: 'Shop',
	        path: '/admin/products',
	        pageTitle: 'Shop',
	        activeShop: true,
	        productCSS: true,
	    });
	});
};