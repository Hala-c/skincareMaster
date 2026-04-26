const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./configration/db");
const mongoose = require("mongoose");
const api = process.env.API_URL;
dotenv.config();
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.static("view/home"));
app.get("/", (req, res) => {
  res.send("Skin Care API is running...");
});

app.use(`/api/v1/users`, require("./routes/userRoutes"));

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
