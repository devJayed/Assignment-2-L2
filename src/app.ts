import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { OrderRoutes, ProductRoutes } from './modules/bicycle/bicycle.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// Root route
app.get('/', async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to BikeStore API Service!',
    success: true,
  });
});

//application routes
app.use('/api/v1/products', ProductRoutes);

app.use('/api/v1/orders', OrderRoutes);
// console.log("app.ts");

export default app;
