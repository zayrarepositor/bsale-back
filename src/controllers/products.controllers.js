import { selectProducts } from '../services/products.services.js';

import { success, error } from '../helpers/responses.js';

export const getProducts = async (req, res) => {
  const { category, name } = req.query;
  if (category && Number.isNaN(Number(category)))
    return error({ res, message: 'invalid category', status: 400 });

  const data = await selectProducts(req, res);

  if (data.length === 0) return error({ res, message: 'products not found' });

  return success({
    res,
    message: `all products ${
      (category ? 'category: ' + category : '') + (name ? ' name: ' + name : '')
    }`,
    data,
  });
};
