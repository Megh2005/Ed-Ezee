"use server";

import { connectDB } from "@/lib/db";
import { WaitListModel } from "@/model/WaitList";

export async function joinWaitlist(emailId) {
  await connectDB();

  if (!emailId) throw new Error("Email Id is required");

  const isSubmitted = await WaitListModel.findOne({ email: emailId });

  if (isSubmitted) throw new Error("You are already in the waitlist");

  const newWaitList = await WaitListModel.create({ email: emailId });

  if (!newWaitList) throw new Error("Failed to add to waitlist");

  return true;
}
