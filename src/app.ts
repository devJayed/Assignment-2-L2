import express, { Application} from 'express';
import cors from 'cors';
import { OrderRoutes, ProductRoutes } from './modules/bicycle/bicycle.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/products', ProductRoutes);

app.use('/api/v1/orders', OrderRoutes);
// console.log("app.ts");

export default app;
