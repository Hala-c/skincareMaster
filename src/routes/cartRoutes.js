const router = require("express").Router();

const { auth } = require("../middleware/authmiddleWare");
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controllers/cartController");

router.post("/", auth, addToCart);
router.get("/", auth, getCart);
router.post("/remove", auth, removeFromCart);

module.exports = router;
