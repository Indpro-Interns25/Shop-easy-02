import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String, trim: true },
  images: [{ type: String, trim: true }],
  videos: [{ type: String, trim: true }],
}, { timestamps: true });

// Indexes
ReviewSchema.index({ product: 1 });
ReviewSchema.index({ customer: 1 });

const Review = mongoose.model("Review", ReviewSchema);

export default Review;
