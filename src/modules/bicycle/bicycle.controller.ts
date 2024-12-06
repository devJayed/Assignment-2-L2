import { Request, Response } from 'express';
import { OrderServices, ProductServices } from './bicycle.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    // will call service func to send this data
    const result = await ProductServices.createProductIntoDB(productData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Product is created successfully.',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Products is retrieved successfully.',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { _id: productId } = req.params;
    const product = await ProductServices.getProductByIdFromDB(productId);

    if (!product) {
      return res.status(404).json({
        message: 'Bicycle not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      status: true,
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving the product',
      status: false,
      error: error,
    });
  }
};

const updateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;

    // Call service
    const updatedProduct = await ProductServices.updateProductByIdInDB(
      productId,
      updatedData,
    );

    if (!updatedProduct) {
      return res.status(404).json({
        message: 'Bicycle not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Product updated successfully',
      status: true,
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while updating the product',
      status: false,
      error: error,
    });
  }
};

const deleteProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const deletedProduct =
      await ProductServices.deleteProductByIdFromDB(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        message: 'Bicycle not found',
        status: false,
      });
    }

    res.status(200).json({
      message: 'Bicycle deleted successfully',
      status: true,
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while deleting the bicycle',
      status: false,
      error: error,
    });
  }
};

const placeOrder = async (req: Request, res: Response) => {
  try {
    console.log("controller.ts");
    const { email, product, quantity, totalPrice } = req.body;
    console.log(email, product, quantity, totalPrice);
    // Place an order and handle inventory management
    const order = await OrderServices.placeOrderInDB({
      email,
      product,
      quantity,
      totalPrice,
    });

    res.status(201).json({
      message: 'Order placed successfully',
      status: true,
      data: order,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to place the order',
      status: false,
      error: error,
    });
  }
};
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    // Calculate revenue form DB
    const totalRevenue = await OrderServices.calculateRevenueFromDB();

    res.status(201).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        "totalRevenue": totalRevenue  
    },
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to calculate revenue.',
      status: false,
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
export const OrderControllers = {
  placeOrder,
  calculateRevenue
};
