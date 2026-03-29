import { Swipe } from "../models/swipe.model.js";
import { processSwipe } from "../services/swipe.service.js";

const swipeUser = async (req, res) => {
  try {
    const swipe = await Swipe.create(req.body);

    const match = await processSwipe(req.body);

    res.status(201).json({
      success: true,
      data: { swipe, match }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { swipeUser };