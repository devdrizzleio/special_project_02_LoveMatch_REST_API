import { Swipe } from "../models/swipe.model.js";
import { Match } from "../models/match.model.js";

const processSwipe = async ({ swiperId, targetUserId, action }) => {
  if (action !== "LIKE") return null;

  const existingSwipe = await Swipe.findOne({
    swiperId: targetUserId,
    targetUserId: swiperId,
    action: "LIKE"
  });

  if (existingSwipe) {
    const match = await Match.create({
      users: [swiperId, targetUserId]
    });

    return match;
  }

  return null;
};

export { processSwipe };