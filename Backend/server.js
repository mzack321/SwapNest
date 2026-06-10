const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const signupRoute = require("./routes/Signup");
const loginRoute = require("./routes/Login");
const productRoute = require("./routes/Productdashboard");
const requestRoute = require("./routes/Allrequest");

const app = express();

// Database Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Static Files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", productRoute);
app.use("/api", requestRoute);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SwapNest Backend Running Successfully",
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});