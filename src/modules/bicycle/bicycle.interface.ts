// 1. Create an interface representing a document in MongoDB.

import { Types } from 'mongoose';

export type IProduct = {
  name: string;
  brand: string;
  price: number;
  type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
};

export type IOrder = {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
