import mongoose from "mongoose";

const HousekeepingSchema = new mongoose.Schema(
  {
    custom_id: { type: String, required: true, unique: true },
    staff_name: { type: String, required: true },
    contact: { type: String, default: "" },
    charges_per_hour: { type: Number, required: true },
    working_hours: { type: String, default: "8:00 AM - 6:00 PM" },
    working_days: { type: String, default: "Monday - Saturday" },
    rating: { type: Number, default: 4.5 },
  },
  { timestamps: true }
);

export default mongoose.models.Housekeeping || mongoose.model("Housekeeping", HousekeepingSchema);