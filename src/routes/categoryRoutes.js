const express = require("express");
const router = express.Router();

const controller = require("../controllers/categoryController");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.post("/", auth, admin, controller.createCategory);
router.get("/", controller.getCategories);
router.put("/:id", auth, admin, controller.updateCategory);
router.delete("/:id", auth, admin, controller.deleteCategory);

module.exports = router;
