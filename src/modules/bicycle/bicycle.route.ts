import express from 'express';
import { ProductControllers } from './bicycle.controller';

const router = express.Router();

router.post('/create-product', ProductControllers.createProduct);

export const ProductRoutes = router;
