import { pool } from '../db.js';

import { serverError } from '../helpers/responses.js';

export const selectProducts = async (req) => {
  const { page, size, category, order } = req.query;

  let defaultPage = 1;

  if (page) {
    if (!Number.isNaN(Number(page)) && Number(page) > 1)
      defaultPage = Number(page);
  }

  let defaultSize = 10;

  if (size) {
    if (!Number.isNaN(Number(size)) && Number(size) > 0)
      defaultSize = Number(size);
  }

  let categoryRequest = '';

  if (category) categoryRequest = `where p.category=${category}`;

  let orderRequest = '';
  if (order && order.toLowerCase() === 'desc')
    orderRequest = `order by p.id desc`;

  try {
    const [rows] = await pool.query(
      `select p.id, p.category, p.name, p.url_image, p.price from product p join category c on p.category=c.id ${categoryRequest} ${orderRequest} limit ${
        (defaultPage - 1) * defaultSize
      }, ${defaultSize}`,
    );
    return rows;
  } catch (err) {
    return serverError({ res, message: err.message });
  }
};
