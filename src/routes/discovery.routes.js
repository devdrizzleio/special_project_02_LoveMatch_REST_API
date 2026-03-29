import express from "express";
import { getDiscoveryUsers } from "../services/discovery.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await getDiscoveryUsers(req.query.userId);
  res.status(200).json({ success: true, data: users });
});

export default router;