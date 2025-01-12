"use server";

import { PrismaClient } from "@prisma/client";

export async function joinWaitlist(emailId) {
  if (!emailId) throw new Error("Email Id is required");

  const prisma = new PrismaClient();

  const isSubmitted = await prisma.maillist.findFirst({
    where: {
      email: emailId,
    },
  });

  if (isSubmitted) throw new Error("You are already in the waitlist");

  const newMailList = await prisma.maillist.create({
    data: {
      email: emailId,
    },
  });

  if (!newMailList) throw new Error("Failed to add to waitlist");

  return newMailList;
}
