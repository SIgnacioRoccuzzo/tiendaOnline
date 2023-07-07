const { model, Schema } = require('mongoose');


//aqui dentro identificamos nuestra estructura de los documentos


/**
 * Esquema de producto de MongoDB.
 * @constructor
 * @param {ProductSchema} schema - Esquema del producto.
 */
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    department: String,
    available: Boolean,
    stock: Number
}, { timestamps: true, versionKey: false });



module.exports = model('product', productSchema);


