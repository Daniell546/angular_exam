const express = require('express');
const router = express.Router();
// const homeManager = require('../managers/homeManager');


router.get('/home', (req, res) => {
    res.send('hello')
})







module.exports = router;