import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema(
  {
    custom_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    monthlyPrice: { type: Number, default: 0 },
    rating: { type: Number, default: 4.0 },
    offer: { type: String, default: "" },
    description: { type: String, default: "" },
    contact: { type: String, default: "" },
    timings: { type: String, default: "" },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

export default mongoose.models.Vendor || mongoose.model("Vendor", VendorSchema);