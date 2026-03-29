const checkSwipeLimit = (req, res, next) => {
  const maxSwipes = parseInt(process.env.MAX_DAILY_SWIPES) || 100;

  if (!req.userSwipeCount) {
    req.userSwipeCount = 0;
  }

  if (req.userSwipeCount >= maxSwipes) {
    return res.status(429).json({
      success: false,
      message: "Daily swipe limit reached"
    });
  }

  req.userSwipeCount += 1;

  next();
};

export { checkSwipeLimit };