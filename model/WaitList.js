import mongoose from "mongoose";

const WaitListSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const WaitListModel =
  mongoose.models.WaitList || mongoose.model("WaitList", WaitListSchema);
