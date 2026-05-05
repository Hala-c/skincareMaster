const router = require("express").Router();

const { auth } = require("../middleware/authmiddleWare");

const {
  createOrder,
  getAllOrders,
  getOrderById,
} = require("../controllers/orderController");

// routes
router.post("/checkout", auth, createOrder);
router.get("/", auth, getAllOrders);
router.get("/:id", auth, getOrderById);

module.exports = router;
