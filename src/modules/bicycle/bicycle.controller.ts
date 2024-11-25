import { Request, Response } from 'express';
import { ProductServices } from './bicycle.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const {product: productData} = req.body;
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

export const ProductControllers = {
  createProduct,
};
