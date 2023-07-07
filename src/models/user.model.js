const { model, Schema } = require('mongoose');


//se pueden poner valor por defecto a los campos
//insertamos products para hacer referencia al otro modelo, el tipo se define a traves de un objeto
//se almacena los identificadores relacionados con el usuario
//esto es algo quw nos ofrece mongoose esto es 1 -> N
//ref significa que apuntan a los productos
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'regular'
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'product' }]
}, { timestamps: true, versionKey: false });

module.exports = model('user', userSchema)