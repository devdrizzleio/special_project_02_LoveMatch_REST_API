import { Match } from "../models/match.model.js";

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find({
      users: req.params.userId
    });

    res.status(200).json({ success: true, data: matches });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { getMatches };