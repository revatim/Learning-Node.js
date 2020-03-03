const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/update', (req, res, next) =>{
    let randomVar = Math.random()*1000;
    res.json({ newEntry: randomVar });
});
module.exports = router;