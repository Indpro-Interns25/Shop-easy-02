import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  deliveryPartner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { 
    type: String, 
    enum: ['assigned', 'out_for_delivery', 'delivered'], 
    default: 'assigned' 
  },
  deliveredAt: { type: Date },
  city: { type: String, required: true, trim: true }
}, { timestamps: true });

// Indexes
DeliverySchema.index({ deliveryPartner: 1 });
DeliverySchema.index({ city: 1 });

const Delivery = mongoose.model("Delivery", DeliverySchema);

export default Delivery;

