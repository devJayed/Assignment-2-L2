import { IProduct } from './bicycle.interface';
import { ProductModel } from './bicycle.models';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
};
