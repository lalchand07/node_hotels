const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
