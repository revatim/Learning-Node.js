const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
//    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    res.render('shop', {
        product_list: adminData.products,
        docTitle: 'Shop',
        path: '/',
        pageTitle: 'Shop',
        activeShop: true,
        productCSS: true,
        hasProducts: adminData.products.length >0, //since handlebar cant run logic
        // layout: false //then wont use layout
    });

});

module.exports = router;
