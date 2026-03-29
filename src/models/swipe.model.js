import mongoose from "mongoose";

const swipeSchema = new mongoose.Schema(
  {
    swiperId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    targetUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    action: {
      type: String,
      enum: ["LIKE", "PASS"],
      required: true
    }
  },
  { timestamps: true }
);

const Swipe = mongoose.model("Swipe", swipeSchema);

export { Swipe };