const express = require('express');
const {
  createCart,
  getCartByUserId,
  updateCart,
  deleteCart,
  deleteProductFromCart,
  getTotalPrice,
  getCartCount,
} = require("../controller/cart.controller");
const cartRouter = express.Router();

cartRouter.route("/").post(createCart);
cartRouter
  .route("/:userId")
  .get(getCartByUserId)
  .put(updateCart)
  .delete(deleteCart);
cartRouter.route('/:userId/:productId').delete(deleteProductFromCart);
// cartRouter.route('/:userId/:productId/').put(protect, updateProductQuantity);
cartRouter.route('/getTotalPrice/:userId').get(getTotalPrice);
cartRouter
  .route("/getCartCount/:userId")
  .get(getCartCount);

module.exports = cartRouter;
// export default ;
