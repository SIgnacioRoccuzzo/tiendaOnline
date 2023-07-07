const User = require('../models/user.model');


const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.json({ fatal: error.message })
    }

};

//se refleja el cambio en la BD porque se tiene que guardar con la fx save()
const buyProduct = async (req, res) => {
    const { userId, productId } = req.params;

    const user = await User.findById(userId);
    user.products.push(productId);
    await user.save();

    res.json(user);
}
const getUser = async (req, res) => {
    const listUser = await User.find().populate('products');
    res.json(listUser[0].products[0].name);
}




module.exports = {
    createUser, buyProduct, getUser
}