const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

router.get('/live-update', (req,res, next) => {
   res.sendFile(path.join(__dirname, '..', 'views', 'time.html'));
});
module.exports = router;