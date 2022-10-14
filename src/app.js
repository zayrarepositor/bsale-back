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
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://storebsale.netlify.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
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
