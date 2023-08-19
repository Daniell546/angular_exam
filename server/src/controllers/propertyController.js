const express = require("express");
const router = express.Router();
const propertyManager = require("../managers/propertyManager");

router.get('/',  (req, res, next) => {
    let properties =  propertyManager.getProperties().lean().then(prop => res.json(prop)); 
    return properties;
})

module.exports = router;
