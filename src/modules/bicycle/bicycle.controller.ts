import { Request, Response } from 'express';
import { ProductServices } from './bicycle.service';

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

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
};
