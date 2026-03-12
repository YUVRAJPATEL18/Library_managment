const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Library API Running");
});
app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});