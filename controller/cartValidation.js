const joi = require("joi");

module.exports={
    addCart: joi.object().keys({
        userID: joi.number().required()
    }),
    deleteCart: joi.object().keys({
        cartId: joi.number(),
    }),
    updatedCart: joi.object().keys({
        cartId: joi.number().required(),
    }),
}