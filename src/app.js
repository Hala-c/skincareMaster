require("dotenv").config();
/*const dotenv = require("dotenv");
dotenv.config();*/
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./configration/db");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

//routes
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "view/home/shop/shop.html"));
});

app.get("/signin", (req, res) => {
  res.sendFile(__dirname + "/view/home/signin.html");
});
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/view/home/register.html");
});
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.static("src/view/home"));
app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "view/home/home.html"));
});

app.use("/images", express.static("images"));
app.use("/api/v1/products", productRoutes);
app.use(`/api/v1/users`, require("./routes/userRoutes"));
//app.use("/api/v1/admin", require("./routes/adminRoutes"));
// app.get("api/v1/admin/dashboard", isAdmin, (req, res) => {
//   res.sendFile(path.join(__dirname, "dashboard.html"));
// });

module.exports = app;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("connection faild");
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
