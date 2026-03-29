import express from "express";
import { createUser, getUserById } from "../controllers/user.controller.js";
import { validateRequiredFields } from "../middlewares/validation.middleware.js";

const router = express.Router();

router.post(
  "/",
  validateRequiredFields(["name", "email", "age", "gender", "preference"]),
  createUser
);

router.get("/:id", getUserById);

export default router;