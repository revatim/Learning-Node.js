const Product = require('../models/product'); 
const Cart  = require('../models/cart');


exports.getIndex = (req, res, next) => {
	Product.fetchAll( products => {
			res.render('shop/index', {
	        product_list: products,
	        docTitle: 'Shop',
	        path: '/',
	        pageTitle: 'Shop',
	        activeShop: true,
	        productCSS: true,
	    });
	});
};

exports.getCart = (req, res, next) => {
	products = [];
	res.render('shop/cart', {
	    product_list: products,
	    docTitle: 'Cart',
	    path: '/cart',
	    pageTitle: 'Your Cart',
	    // activeShop: true,
	    // productCSS: true,
	});
	
};

exports.getProductList = (req, res, next) => {
	// for all products 
	Product.fetchAll( products => {
			res.render('shop/product-list', {
	        product_list: products,
	        docTitle: 'Shop',
	        path: '/products',
	        pageTitle: 'Shop',
	        activeShop: true,
	        productCSS: true,
	    });
	});
};

exports.getCheckout = (req, res, next) => {
	products = [];
	res.render( 'shop/checkout', {
	    product_list: products,	
		pageTitle: 'Checkout',
		path: '/checkout'
	})
};

exports.getOrders = (req, res, next) => {
	res.render('shop/orders', {
		orders : [],
		pageTitle : 'Orders',
		path : '/orders'
	})
}

exports.getProductDetails = (req, res, next) => {
	const product_id = req.params.product_id;
	// res.redirect('/')
	Product.findById(product_id, product => {
		res.render('shop/product-detail', {
			item: product,
	        docTitle: 'Product Details',
	        path: '/products',
	        pageTitle: 'Product Details',
		});
	});
	
}

exports.postCart = (req, res, next) => {
	const product_id = req.body.product_id;
	console.log("Added new product to console : ", product_id);
	Product.findById(product_id, (product) => {
		Cart.addProduct(product_id, product.price);
		Cart.getCartProducts( products => {
			res.render('shop/cart', {
				product_list: products,
				docTitle: 'Cart',
				path: '/cart',
				pageTitle: 'Your Cart',
				// activeShop: true,
				// productCSS: true,
			});
		});
	})
	// res.redirect('/cart');
}