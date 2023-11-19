const {models} = require("../models");

module.exports = {
    getCart: async () => {
      const carts = await models.cart.findAll({include: models.user});
      return carts;
    },
    addCart: async(data) => {
      const carts = await models.cart.create(data);
      console.log(carts);
      return carts;
    },
  
    updatedCart: async (cartId, updateCartData) => {
      const carts = await models.cart.findByPk(cartId);
    if (carts) {
        carts.update(updateCartData);
    }
    return carts;
    },
  
    deleteCart: async (cartId) => {
      const carts = await models.cart.findByPk(cartId);
    if (carts) {
        carts.destroy();
        return "CART DELETED SUCCESSFULLY";
    }
    return null;
    },

    addToCart : async(productID, cartID) => {
      try {
        const newlyAdded = await models.product_cart.create({
          productID,
          cartID
        })
        return newlyAdded;
      } catch (error) {
        console.log(error);
      }
    },

    cartById: async (cartId) => {
      try {
        const cartById = await models.cart.findByPk(cartId, {
          include: [
            {
              model: models.user,
            },
            {
              model: models.product,
              through: models.product_cart,
            },
          ],
        });
        if (cartById) {
          return cartById;
        } else {
          return "No cart with this ID";
        }
      } catch (error) {
        console.log(error);
      }
    }
  };