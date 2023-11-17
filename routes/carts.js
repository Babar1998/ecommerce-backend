var express = require('express');
var router = express.Router();
const carts = require("../controller/cartController");

/* GET products listing. */
router.get("/", carts.cartsController);
router.post("/add", carts.addCartController);
router.put("/update/:id",carts.updatedCartController);
router.delete("/delete/:id",carts.deleteCartController);


module.exports = router;
