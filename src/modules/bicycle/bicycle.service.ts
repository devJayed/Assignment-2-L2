import { IOrder, IProduct } from './bicycle.interface';
import { OrderModel, ProductModel } from './bicycle.models';

const createProductIntoDB = async (product: IProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getProductByIdFromDB = async (productId: string) => {
  const product = await ProductModel.findOne({ productId });
  return product;
};

const updateProductByIdInDB = async (
  productId: string,
  updatedData: Partial<IProduct>,
) => {
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    productId,
    { ...updatedData },
    { new: true, runValidators: true }, // Return updated document and validate updates
  );

  return updatedProduct;
};

const deleteProductByIdFromDB = async (productId: string) => {
  const deletedProduct = await ProductModel.findByIdAndDelete(productId);
  return deletedProduct;
};

const placeOrderInDB = async (orderData: IOrder) => {
  try {
    // console.log('service.ts');
    const { product: productId, quantity } = orderData;

    // Log the inputs
    // console.log('Order Data:', productId, quantity);

    // Step 1: Find by `_id`
    // console.log('Searching for the bicycle...');
    const bicycle = await ProductModel.findById(productId);

    // Step 2: bicycle exists?
    if (!bicycle) {
      throw new Error('Bicycle not found');
    }
    // console.log('Bicycle found:', bicycle);

    // Step 3: Is enough stock? and Update inventory
    if (bicycle.quantity >= quantity) {
      console.log('Updating inventory...');
      bicycle.quantity -= quantity;
      if (bicycle.quantity === 0) {
        bicycle.inStock = false;
      }
      await bicycle.save();
      // console.log('Inventory updated:', bicycle);
    } else {
      throw new Error('Insufficient stock available');
    }

    // Step 5: Create the order
    // console.log('Creating the order...');
    const order = await OrderModel.create(orderData);
    // console.log('Order created:', order);

    // Return the created order
    return order;
  } catch (error) {
    console.log('Error in placing order:', error);
    throw new Error(
      error instanceof Error ? error.message : 'Failed to place the order',
    );
  }
};

const calculateRevenueFromDB = async (): Promise<number> => {
  try {
    const result = await OrderModel.aggregate([
      {
        $project: {
          revenue: { $multiply: ['$quantity', '$totalPrice'] },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$revenue' }, 
        },
      },
      {
        $project: {
          _id: 0, 
          totalRevenue: 1, 
        },
      },
    ]);

    return result.length > 0 ? result[0].totalRevenue : 0;
  } catch (error) {
    console.log('Error during revenue calculation:', error);
    throw error;
  }
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductByIdInDB,
  deleteProductByIdFromDB,
};

export const OrderServices = {
  placeOrderInDB,
  calculateRevenueFromDB,
};