const express = require("express");
const router = express.Router();
const propertyManager = require("../managers/propertyManager");

router.get('/', async (req, res) => {
    const properties = await propertyManager.getProperties().lean()
    console.log(properties, '...');
    return properties;
})


module.exports = router;
