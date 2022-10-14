import { selectProducts } from '../services/products.services.js';

import { success, error, serverError } from '../helpers/responses.js';

export const getProducts = async (req, res) => {
  const { category } = req.query;
  if (category && Number.isNaN(Number(category)))
    return error({ res, message: 'invalid category', status: 400 });

  try {
    const data = await selectProducts(req);

    if (data.length === 0) return error({ res, message: 'products not found' });

    return success({
      res,
      message: category ? `all products category: ${category}` : `all products`,
      data,
    });
  } catch (err) {
    return serverError({ res, message: err.message });
  }
};
