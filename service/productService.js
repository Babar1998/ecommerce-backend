const {models} = require("../models");

module.exports = {
    getProduct: async () => {
      const products = await models.product.findAll();
      return products;
    },
    addProduct: async(data) => {
      const products = await models.product.create(data);
      console.log(products);
      return products;
    },
  
    updatedProduct: async (productId, updateProductData) => {
      const products = await models.product.findByPk(productId);
    if (products) {
        products.update(updateProductData);
    }
    return products;
    },
  
    deleteProduct: async (productId) => {
      const products = await models.product.findByPk(productId);
    if (products) {
        products.destroy();
        return "PRODUCT DELETED SUCCESSFULLY";
    }
    return null;
    },
  };