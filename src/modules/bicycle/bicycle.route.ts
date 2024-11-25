import express from 'express';
import { ProductControllers } from './bicycle.controller';

const router = express.Router();

router.post('/create-product', ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:productId', ProductControllers.getProductById);

export const ProductRoutes = router;
