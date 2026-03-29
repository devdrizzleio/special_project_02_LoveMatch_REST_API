import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },
    bio: { type: String },
    interests: [{ type: String }],
    photos: [{ type: String }]
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };