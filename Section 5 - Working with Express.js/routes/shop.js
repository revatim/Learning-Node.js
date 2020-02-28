const path = require('path');
const express = require('express');

const shopRouter = express.Router();

shopRouter.get('/', (req, res, next) => {
    return res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = shopRouter;