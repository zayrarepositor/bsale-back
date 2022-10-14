import express from 'express';

import indexRoutes from './routes/index.routes.js';

import productsRoutes from './routes/products.routes.js';

import swaggerJsDoc from 'swagger-jsdoc';

import swaggerUI from 'swagger-ui-express';

import { options } from './helpers/swagger.js';

const app = express();

app.use(express.json());

// documentation
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(options)));

app.use('/products', productsRoutes);

// 404 Not Found
app.use('*', indexRoutes);

//error handler
app.use((req, res, next) => {
  next(res.status(404).send('Cannot complete the request'));
});

export default app;
