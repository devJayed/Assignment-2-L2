import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

// Create the schema for the Order model
const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true }, // Reference to Product model
    quantity: { type: Number, required: true, min: 1 }, // Minimum order quantity
    totalPrice: { type: Number, required: true, min: 0 }, // Validation for positive price
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the Order model
export const OrderModel = model<IOrder>('Order', orderSchema);
