const express = require('express');
const router = express.Router();
const propertyManager = require("../managers/propertyManager");



router.get('/home', async (req, res) => {
    const properties = await propertyManager.getProperties().lean();

    return properties;
})







module.exports = router;