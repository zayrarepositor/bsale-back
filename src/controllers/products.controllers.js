import { selectProducts } from '../services/products.services.js';

import { success, error, serverError } from '../helpers/responses.js';

export const getProducts = async (req, res) => {
  const { category, name } = req.query;
  if (category && Number.isNaN(Number(category)))
    return error({ res, message: 'invalid category', status: 400 });

  try {
    const data = await selectProducts(req, res);

    if (data.length === 0) return error({ res, message: 'products not found' });

    return success({
      res,
      message: `all products ${
        (category ? 'category: ' + category : '') +
        (name ? ' name: ' + name : '')
      }`,
      data,
    });
  } catch (err) {
    return serverError({ res, message: err.message });
  }
};
