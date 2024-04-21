"use server";

import { db } from "@/db";
import { emailSubscriptions } from "@/db/schema";

export const addEmailSubscriber = async (email: string) => {
  try {
    const newEmailSubscriber = await db
      .insert(emailSubscriptions)
      .values({
        email,
      })
      .returning();

    return newEmailSubscriber;
  } catch (error) {
    console.error(error);
    // handle error
    return null;
  }
};
