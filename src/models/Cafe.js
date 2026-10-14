import mongoose from "mongoose";

const CafeSchema = new mongoose.Schema(
  {
    custom_id: { type: String }, // String accepts "cafe-01"
    cafe_name: { type: String, required: true },
    location: { type: String },
    timings: { type: String },
    rating: { type: Number },
    price_range: { type: String },
    contact: { type: String },
    food_type: { type: String },
  },
  { timestamps: true, strict: false }
);

delete mongoose.models.Cafe;

export default mongoose.models.Cafe || mongoose.model("Cafe", CafeSchema, "cafes");