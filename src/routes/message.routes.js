import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/",
  validateRequiredFields(["matchId", "senderId", "text"]),
  sendMessage
);

router.get("/:matchId", getMessages);

export default router;