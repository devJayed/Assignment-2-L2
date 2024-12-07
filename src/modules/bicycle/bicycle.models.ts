// 2. Create a Schema corresponding to the document interface.
// 3. Create a Model.

import { Schema, model } from 'mongoose';
import { IOrder, IProduct } from './bicycle.interface';

const productSchema = new Schema<IProduct>(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required.'], 
      trim: true 
    },
    brand: { type: String, required: [true, 'Brand is required'] },
    price: { 
      type: Number, 
      required: true, 
      min: [0, 'Price must be a positive number.'] 
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: [true, 'Type is required.'],
    },
    description: { type: String, required: [true, 'Description is required.'] },
    quantity: { 
      type: Number, 
      required: [true, 'Quantity is required.'], 
      min: [0, 'Quantity must be a non-negative number.'] 
     },
    inStock: { type: Boolean, required: [true, 'InStock status is required.'] },
  },
  { timestamps: true },
);

const orderSchema = new Schema<IOrder>(
  {
    email: { 
      type: String, 
      required: [true, 'Email is required.'], 
      match: [/.+@.+\..+/, 'Invalid email address.'] 
    },
    product: { 
      type: Schema.Types.ObjectId, 
      ref: 'Product', 
      required: [true, 'Product reference is required.'] 
    },
    quantity: { 
      type: Number, 
      required: [true, 'Quantity is required.'], 
      min: [1, 'Quantity must be at least 1.'] 
    },
    totalPrice: { 
      type: Number, 
      required: [true, 'Total price is required.'], 
      min: [0, 'Total price must be a positive number.'] 
    },
  },
  { timestamps: true },
);
// Export the Product model
export const ProductModel = model<IProduct>('Product', productSchema);

// Export the Order model
export const OrderModel = model<IOrder>('Order', orderSchema);
