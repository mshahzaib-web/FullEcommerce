const errorHandler = (err, req, res, next) => {
  // If a status code was already set (like 400), use it. Otherwise, default to 500.
  const statusCode = res.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "An unexpected server error occurred",
  });
  console.log(err.message);
};

export default errorHandler;
