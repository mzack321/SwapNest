
const express = require("express");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");

const signupRoute = require("./routes/Signup");
const loginRoute = require("./routes/Login");
const productRoute = require("./routes/Productdashboard");
const requestRoute = require("./routes/Allrequest");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ROUTES
app.use("/api", signupRoute);
app.use("/api", loginRoute);
app.use("/api", productRoute);
app.use("/api", requestRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../Frontend/dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

