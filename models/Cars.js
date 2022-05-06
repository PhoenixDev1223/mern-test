const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
price: {
        type: Number
    },
    sku: {
        type: String
    },
    model: {
        type: String
    },
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Car = mongoose.model('cars', CarSchema);