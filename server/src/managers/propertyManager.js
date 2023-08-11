const Property = require("../models/Property");

exports.getProperties = () => Property.find();