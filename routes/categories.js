var express = require('express');
var router = express.Router();
const categories = require("../controller/categoryController");

/* GET products listing. */
router.get("/", categories.categoriesController);
router.post("/add", categories.addCategoryController);
router.put("/update/:id",categories.updatedCategoryController);
router.delete("/delete/:id",categories.deleteCategoryController);


module.exports = router;
