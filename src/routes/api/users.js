const router = require('express').Router();

const userController = require('../../controllers/users.controller');

router.get('/', userController.getUser);
router.post('/register', userController.createUser);
router.put('/:userId/buy/:productId', userController.buyProduct);




module.exports = router;