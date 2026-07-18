import jwt from "jsonwebtoken";

export const adminIsLogin = async (req, res, next) => {
  try {
    const adminToken = req.cookies.adminToken;

    if (!adminToken) {
      return res.status(401).json({
        success: false,
        message: "Please Login First",
      });
    }

    const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);

    req.admin = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
