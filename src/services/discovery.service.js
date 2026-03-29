import { User } from "../models/user.model.js";
import { Swipe } from "../models/swipe.model.js";

const getDiscoveryUsers = async (userId) => {
  const swipedUsers = await Swipe.find({ swiperId: userId }).distinct("targetUserId");

  const users = await User.find({
    _id: { $nin: [...swipedUsers, userId] }
  });

  return users;
};

export { getDiscoveryUsers };