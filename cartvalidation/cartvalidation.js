const Joi = require('joi');

const cartValidationSchema = Joi.object({
  cartId: Joi.string().required(),
  userId: Joi.string(),
  products: Joi.array().items(Joi.object({
    product: Joi.string().required(),
    quantity: Joi.number().integer().min(1),
  })),
});