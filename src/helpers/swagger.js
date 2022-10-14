// backend documentation options
export const options = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'BSALE-TEST',
      description:
        'Backend server (MVC) with Nodejs and Express, DataBase with MySql',
      contact: {
        name: 'Zayra Velasco',
        url: 'https://zayra-velasco-developer.netlify.app/',
        email: 'zayra.contacto@gmail.com',
      },
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'],
};
