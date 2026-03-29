import express from "express";
import { swipeUser } from "../controllers/swipe.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";
import { checkSwipeLimit } from "../middlewares/swipeLimit.middleware.js";

const router = express.Router();

router.post(
  "/",
  validateRequiredFields(["swiperId", "targetUserId", "action"]),
  checkSwipeLimit,
  swipeUser
);

export default router;