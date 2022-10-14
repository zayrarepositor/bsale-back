import express from 'express';

import cors from 'cors';

import helmet from 'helmet';

import swaggerJsDoc from 'swagger-jsdoc';

import swaggerUI from 'swagger-ui-express';

import indexRoutes from './routes/index.routes.js';

import productsRoutes from './routes/products.routes.js';

import { options } from './helpers/swagger.js';

// Initialization
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(options)));

app.use('/products', productsRoutes);

// 404 Not Found Page
app.use('*', indexRoutes);

// Error handler
app.use((req, res, next) => {
  next(res.status(404).send('Cannot complete the request'));
});

export default app;
