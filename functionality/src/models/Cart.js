const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    type: {type: String, required: true},
    location: {type: String, required: true},
    address: {type: String, required: true},
    floors: {type: Number, required: true},
    rooms: {type: Number, required: true},
    squareMeters: {type: Number, required: true},
    price: {type: Number, required: true},
    priceForHour: {type: Number, required: true},
    img1: {type: String, required: true},
    img2: {type: String, required: true},
    img3: {type: String, required: true},
    img4: {type: String, required: true},
    img5: {type: String, required: true},
    ownerId: {type: String, required: true},
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;