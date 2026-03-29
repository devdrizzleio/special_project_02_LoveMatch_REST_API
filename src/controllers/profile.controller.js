import { Profile } from "../models/profile.model.js";

const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId });
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { createProfile, getProfile };