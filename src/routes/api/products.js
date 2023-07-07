const router = require('express').Router();

const productsController = require('../../controllers/products.controller')

router.get('/', productsController.getProducts);
router.get('/:productId', productsController.getById);
router.post('/', productsController.insertProducts);
router.put('/:productId', productsController.update);
router.delete('/:productId', productsController.deleteById);



module.exports = router;