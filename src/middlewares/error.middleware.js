const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  return res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
};

export { errorHandler };