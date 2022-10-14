import { pool } from '../db.js';

import { serverError } from '../helpers/responses.js';

export const selectProducts = async (req, res) => {
  const { page, size, category, name, order } = req.query;

  let defaultPage = 1;

  if (page) {
    if (!Number.isNaN(Number(page)) && Number(page) > 1)
      defaultPage = Number(page);
  }

  let defaultSize = 100;

  if (size) {
    if (!Number.isNaN(Number(size)) && Number(size) > 0)
      defaultSize = Number(size);
  }

  let nameRequest = '';

  if (name) nameRequest = `where p.name like '%${name}%'`;

  let categoryRequest = '';

  if (category) categoryRequest = `p.category=${category}`;

  let orderRequest = '';
  if (order && order.toLowerCase() === 'desc')
    orderRequest = `order by p.id desc`;

  let query = `select p.id, p.category, p.name, p.url_image, p.price, p.discount from product p join category c on p.category=c.id ${
    nameRequest +
    (nameRequest && categoryRequest ? ' and ' : '') +
    (!nameRequest && categoryRequest ? ' where ' : '') +
    categoryRequest
  } ${orderRequest} limit ${(defaultPage - 1) * defaultSize}, ${defaultSize}`;

  try {
    const [rows] = await pool.query(query);
    return rows;
  } catch (err) {
    return serverError({ res, message: err.message });
  }
};
