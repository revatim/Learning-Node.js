const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const productsController = require('../controllers/products');
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProductList);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);
module.exports = router;
