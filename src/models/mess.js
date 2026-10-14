import mongoose from "mongoose";

const MessSchema = new mongoose.Schema(
  {
    custom_id: { type: String, required: true, unique: true },
    mess_name: { type: String, required: true },
    location: { type: String, required: true },
    daily_charges: { type: Number, default: 0 },
    daily_unit: { type: String, default: "plate" },
    monthly_charges: { type: Number, required: true },
    monthly_note: { type: String, default: "one time" },
    contact: { type: String, default: "" },
    rating: { type: Number, default: 4.0 },
    menu: {
      lunch: { type: String, default: "" },
      dinner: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Mess || mongoose.model("Mess", MessSchema);