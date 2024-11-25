// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.

import { Schema, model } from 'mongoose';
import { IOrder, IProduct } from './bicycle.interface';

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], 
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 }, 
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true }, 
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

// Export the Product model
export const ProductModel = model<IProduct>('Product', productSchema);

// Export the Order model
export const OrderModel = model<IOrder>('Order', orderSchema);


