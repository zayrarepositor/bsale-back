import { Router } from 'express';

import { getProducts } from '../controllers/products.controllers.js';

const router = Router();
/**
 * @swagger
 * tags:
 *   - name: Product
 *     description: Products endpoint
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integeer
 *           description: product id
 *         category:
 *           type: integer
 *           description: category id
 *         name:
 *           type: string
 *           description: product name
 *         url_image:
 *           type: string
 *           description: product image url
 *         price:
 *           type: integer
 *           description: product price
 *         discount:
 *           type: integer
 *           description: product discount percentage
 *   responses:
 *     getProducts:
 *       description: project information
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 description: response title
 *               data:
 *                 type: array
 *                 description: response content
 *                 items:
 *                   $ref: '#/components/schemas/Product'
 *           example:
 *             message: all products category 1 name energetica
 *             data:
 *               - id: 5
 *                 category: 1
 *                 name: ENERGETICA MR BIG"
 *                 url_image: https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg
 *                 price: 1490
 *                 discount: 10
 *               - id: 6
 *                 category: 1
 *                 name: ENERGETICA RED BULL"
 *                 url_image: https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg
 *                 price: 1490
 *                 discount: 10
 *     400:
 *       description: Bad Request - invalid category
 *     404:
 *       description: Not Found - products not found
 *     500:
 *       description: Error - Internal Server Error
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: /products?name=%name%&category=category&page=page&size=size&order=[asc,desc]
 *     description: Get products filtered by name and/or category id or get all products (by default). pagination queries (page, size and order) are acepted.
 *     tags: [Product]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: product's name (like available)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: product's category id
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: page required
 *       - in: query
 *         name: size
 *         schema:
 *           type: integer
 *         description: rows number per page
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *         description: direction to order rows
 *     responses:
 *       200:
 *         $ref: '#/components/responses/getProducts'
 *       400:
 *         $ref: '#/components/responses/400'
 *       404:
 *         $ref: '#/components/responses/404'
 *       500:
 *         $ref: '#/components/responses/500'
 */
router.get('/', getProducts);

export default router;
