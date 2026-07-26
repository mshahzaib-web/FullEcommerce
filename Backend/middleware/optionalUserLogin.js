import jwt from "jsonwebtoken";

export const optionalUserLogin = (req, res, next) => {
  try {
    // 1. Check if authentication token/session exists
    // (Adjust this depending on how you store auth, e.g., req.session, req.headers.authorization, cookies, etc.)
    const userToken = req.cookies.userToken;

    if (!userToken) {
      // User is not logged in, but we still allow them to proceed

      return next();
    }

    const decode = jwt.verify(userToken, process.env.JWT_SECRET);

    req.user = decode;

    next();
  } catch (error) {
    // If the token is invalid or expired, we don't throw an error or block the request.
    // We simply treat them as a guest/unauthenticated user.

    next();
  }
};
