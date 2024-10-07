const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/shop', productController.getAllProducts);
router.post('/insert', productController.insertProduct);
router.get('/buy/:id', productController.buyProduct);

module.exports = router;
