const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

// /admin/add-product POST
router.post('/add-product', (req, res, next) => {
    const body = req.body;
    console.log(body.title);
//    return res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    return res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))


});

router.post('/product', (req, res, next) => {
    const body = req.body;
    console.log(body.title);
    return res.redirect('/');
});

router.use((req, res, next) => {
    res.status(404);
    return res.send('<h1> Page not found </h1> <a href="/admin/add-product"> Add Product </a>');
})

module.exports = router;