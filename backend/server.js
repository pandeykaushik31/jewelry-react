const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (Directly in Code)
const MONGO_URI = "mongodb+srv://pandeykaushik900:BKHyIN4y1W5slqLM@jewellery.gd7we.mongodb.net/";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

// ✅ JWT Secret Key (Hardcoded, Not Recommended)
const JWT_SECRET = "your_jwt_secret_key"; 

app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
