import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, unique: true },
  description: { type: String, trim: true },
}, { timestamps: true });

// Index
CategorySchema.index({ name: 1 });

const Category = mongoose.model("Category", CategorySchema);

export default Category;
