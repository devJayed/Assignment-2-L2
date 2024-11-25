import { IProduct } from './bicycle.interface';
import { ProductModel } from './bicycle.models';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getProductByIdFromDB = async (productId: string) => {
  const product = await ProductModel.findOne({productId});
  return product;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
};
