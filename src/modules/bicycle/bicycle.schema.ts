import { Schema, model } from 'mongoose';
import { IOrder, IProduct } from './bicycle.interface';

// Create the schema for the Product model
const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 }, // Validation for positive price
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], // Enum validation
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 }, // Validation for non-negative quantity
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true }, // Automatically adds createdAt and updatedAt fields
);

const orderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true },
);



// Export the Order model
export const OrderModel = model<IOrder>('Order', orderSchema);

// Export the Product model
export const ProductModel = model<IProduct>('Product', productSchema);
