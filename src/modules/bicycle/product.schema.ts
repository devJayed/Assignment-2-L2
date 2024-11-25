import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

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
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the Product model
export const ProductModel = model<IProduct>('Product', productSchema);
