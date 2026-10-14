import mongoose from "mongoose";

const RoommateSchema = new mongoose.Schema(
  {
    id: { type: Number },
    custom_id: { type: Number },
    name: { type: String, required: true },
    genderSign: { type: String },
    age: { type: Number },
    college: { type: String },
    rating: { type: Number },
    reviews: { type: Number },
    badge: { type: String },
    badgeStyle: { type: String },
    gender: { type: String },
    food: { type: String },
    smoking: { type: String },
    location: { type: String },
    budget: { type: String }, // String handles "₹6k - ₹8k/month"
    interests: { type: String },
    quote: { type: String },
    img: { type: String },
    href: { type: String },
  },
  { timestamps: true, strict: false }
);

// Clear cached compiled model in Next.js hot-reload to apply schema change immediately
delete mongoose.models.Roommate;

export default mongoose.models.Roommate || mongoose.model("Roommate", RoommateSchema);