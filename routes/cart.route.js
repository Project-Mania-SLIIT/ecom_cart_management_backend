const express = require('express');
import { buyerProtect, protect } from "../middleware/auth.js";
const {
  createCart,
  getCartByUserId,
  updateCart,
  deleteCart,
  deleteProductFromCart,
  getTotalPrice,
  getCartCount,
} = require("../controllers/cart.controller");
const cartRouter = express.Router();

cartRouter.route("/").post(protect, createCart);
cartRouter
  .route("/:userId")
  .get(protectUser, getCartByUserId)
  .put(protectUser, updateCart)
  .delete(protectUser, deleteCart);
cartRouter.route('/:userId/:productId').delete(protectUser, deleteProductFromCart);
// cartRouter.route('/:userId/:productId/').put(protect, updateProductQuantity);
cartRouter.route('/getTotalPrice/:userId').get(protectUser,buyerProtect, getTotalPrice);
cartRouter
  .route("/getCartCount/:userId")
  .get(protectUser, buyerProtect, getCartCount);

export default cartRouter;
