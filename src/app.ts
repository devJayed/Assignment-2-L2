import express, { Application} from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/bicycle/bicycle.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/products', ProductRoutes);

export default app;
