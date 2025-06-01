const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/connectDB");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/categories", require("./routes/category"));
app.use("/api/news", require("./routes/news"));

app.use("/uploads", express.static("uploads"));

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server http://localhost:${process.env.PORT} üzerinde çalışıyor`);
});
