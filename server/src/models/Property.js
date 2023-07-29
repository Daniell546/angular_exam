const mongoose = require('mongoose');

const propertyModel = new mongoose.Schema({
    purpose: {
        type: String,
    },
    type: {
        type: String,
    },
    location: {
        type: String,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    }
});

const Property = mongoose.model('Property', propertyModel);

module.exports = Property;