import mongoose from "mongoose";

const LaundrySchema = new mongoose.Schema(
  {
    custom_id: { type: String, required: true, unique: true },
    laundry_name: { type: String, required: true },
    location: { type: String, required: true },
    charges_per_kg: { type: Number, required: true },
    timings: { type: String, default: "8:00 AM - 9:00 PM" },
    contact: { type: String, default: "" },
    rating: { type: Number, default: 4.0 },
  },
  { timestamps: true }
);

export default mongoose.models.Laundry || mongoose.model("Laundry", LaundrySchema);