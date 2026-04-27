const jwt = require("jsonwebtoken");

module.exports.auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secretKey");

    req.user = decoded; // 👈 هنا السر كله
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};


module.exports.isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized: no user found" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: admin only" });
  }

  next();
};
