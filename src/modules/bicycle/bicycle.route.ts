import express from 'express';
import { OrderControllers, ProductControllers } from './bicycle.controller';

const routerProduct = express.Router();
const routerOrder = express.Router();

routerProduct.post('/create-product', ProductControllers.createProduct);

routerProduct.get('/', ProductControllers.getAllProducts);

routerProduct.get('/:productId', ProductControllers.getProductById); 

routerProduct.put('/:productId', ProductControllers.updateProductById); 

routerProduct.delete('/:productId', ProductControllers.deleteProductById);

routerOrder.post('/', OrderControllers.placeOrder);
// console.log("routes.ts");

routerOrder.get('/revenue', OrderControllers.calculateRevenue);

export const ProductRoutes = routerProduct;

export const OrderRoutes = routerOrder;
