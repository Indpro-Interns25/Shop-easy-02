import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['admin', 'seller', 'customer', 'delivery_partner', 'city_admin'], 
    required: true 
  },
  city: { type: String, trim: true }, // For delivery partners and city admins
  profileImage: { type: String, trim: true },
  contactNumber: { type: String, trim: true },
}, { timestamps: true });

// Indexes
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ city: 1 });

const User = mongoose.model("User", UserSchema);

export default User;
