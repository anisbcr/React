const Product = require("../models/product");

// Récupérer tous les produits
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.render('shop', { products });
};

// Insérer un nouveau produit
exports.insertProduct = async (req, res) => {
    const { title, author } = req.body;
    const newProduct = new Product({ title, author });
    
    await newProduct.save();
    res.redirect('/shop');
};

// Acheter un produit
exports.buyProduct = async (req, res) => {
    const productId = req.params.id;
    // Logique d'achat ici
    res.send(`Achat du produit avec ID : ${productId}`);
};
