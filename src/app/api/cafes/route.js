import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Cafe from "@/models/Cafe";

export async function GET() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI);
    }
    const cafes = await Cafe.find({}).lean();
    return NextResponse.json({ success: true, data: cafes });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}