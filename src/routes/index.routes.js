import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: Index
 *     description: Root endpoint
 * components:
 *   schemas:
 *     Welcome:
 *       type: object
 *       properties:
 *         msg:
 *           type: string
 *           description: response title
 *         project:
 *           type: string
 *           description: project name
 *         author:
 *           type: string
 *           description: project author
 *         description:
 *           type: string
 *           description: project description
 *         version:
 *           type: string
 *           description: project version
 *         thisWay:
 *           type: string
 *           description: documentation url
 *   responses:
 *     getIndex:
 *       description: project information
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Welcome'
 *           example:
 *             msg: 404 Page
 *             project: Bsale - Test
 *             author: Zayra Velasco
 *             description: rest api (incomplete) for bsale store with node, express & mysql
 *             version: 1.0.0
 *             doc:
 */
/**
 * @swagger
 * /:
 *   get:
 *     sumary: project information
 *     description: Just a welcome message with project information
 *     tags: [Index]
 *     responses:
 *       200:
 *         $ref: '#/components/responses/getIndex'
 */
router.get('/', (req, res) =>
  res.status(200).json({
    msg: '404 Page',
    project: 'Bsale - Test',
    author: 'Zayra Velasco',
    description:
      'rest api (incomplete) for bsale store with node, express & mysql',
    version: '1.0.0',
    doc: 'https://bsale-server.up.railway.app/api-docs/',
  }),
);

export default router;
