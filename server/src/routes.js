const router = require('express').Router();
const homeController = require('./controllers/homeController');
const userController = require('./controllers/userController');
const propertyController = require('./controllers/propertyController');

router.use(homeController);
// router.use('/user', userController)
router.use('/property', propertyController);
// router.use('*', (req, res) => {
//     res.render('404');
// })

module.exports = router;