const express = require('express');
const { accountRouter } = require('./Account.router');
// const { checkoutRouter } = require('./Checkout.router');
// const { productRouter } = require('./Product.router');



const rootRouter = express.Router();
rootRouter.use('/Account', accountRouter)
// rootRouter.use('/Product', productRouter)
// rootRouter.use('/Checkout', checkoutRouter)
module.exports = {
    rootRouter
}