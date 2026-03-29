import express from "express";
import { createProfile, getProfile } from "../controllers/profile.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/",
  validateRequiredFields(["userId"]),
  createProfile
);

router.get("/:userId", getProfile);

export default router;