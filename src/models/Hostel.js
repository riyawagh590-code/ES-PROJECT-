import mongoose from "mongoose";

const HostelSchema = new mongoose.Schema(
  {
    custom_id: { type: String, required: true, unique: true },
    hostel_name: { type: String, required: true },
    location: { type: String, required: true },
    charges: { type: Number, required: true },
    charge_unit: { type: String, default: "year" },
    gender: { type: String, enum: ["Boys", "Girls", "Co-ed"], default: "Boys" },
    contact: { type: String, default: "" },
    rating: { type: Number, default: 4.0 },
  },
  { timestamps: true }
);

export default mongoose.models.Hostel || mongoose.model("Hostel", HostelSchema);