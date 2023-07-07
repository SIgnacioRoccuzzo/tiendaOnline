const Product = require('../models/products.model')

const getProducts = async (req, res) => {
    //select * from products
    const products = await Product.find();
    res.json(products);
}

const insertProducts = async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
}

const getById = async (req, res) => {
    const { productId } = req.params;
    const producto = await Product.findById(productId);
    res.json(producto);
}

const update = async (req, res) => {
    const { productId } = req.params;
    const updateProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    res.json(updateProduct);
}

const deleteById = async (req, res) => {
    const { productId } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(productId);
    res.json(deleteProduct);
}



module.exports = {
    getProducts, insertProducts, getById, update, deleteById
}