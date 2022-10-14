export const success = ({ res, message, data, status = 200 }) => {
  res.status(status).json({
    message,
    data,
  });
};

export const error = ({ res, message, status = 404 }) => {
  res.status(status).send(message);
};

export const serverError = ({ res, message, status = 500 }) => {
  res.status(status).send(message);
};
