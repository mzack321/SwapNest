
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        message: "No Token Provided",
      });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        message: "Invalid Token Format",
      });
    }
    const decoded = jwt.verify(
      token,
      "swapnestsecretkey"
    );
    req.user = decoded;
    next();
 } catch (error) {
    return res.status(401).json({
      message: "Invalid or Expired Token",
    });
  }};

module.exports = auth;