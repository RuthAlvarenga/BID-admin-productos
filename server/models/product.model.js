const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        minlength: [5, 'Error, minímo 10 caracteres']
    },
    price: {type: Number},
    description: { 
        type: String,
        minlength: [10, 'Error, minímo 10 caracteres']
    }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);

