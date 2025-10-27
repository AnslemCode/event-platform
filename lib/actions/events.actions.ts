"use server";

import connectDB from "../mongodb";
import { Event } from "@/database";

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const similarEvents = await Event.find({ slug: { $ne: slug } }).limit(3);
    return similarEvents;
  } catch (error) {
    console.error(error);
    return [];
  }
};
