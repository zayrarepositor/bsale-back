### Prueba Técnica

<h1 align="center">Tienda BSale</h1>

# Requerimientos: 

➔ Construir una tienda online.

➔ Utilizar la base de datos (mysql) dada.

➔ Desplegar productos agrupados por la categoría a la que pertenecen.

➔ Generar por separado backend (API REST) y frontend (aplicación que la
consuma).

➔ Agregar un buscador, el cual tiene que estar implementado a nivel de servidor, mediante una Api Rest cuyo lenguaje y framework puede ser de libre elección. Es decir, los datos de productos deben llegar filtrados al cliente.

➔ Disponibilizar la aplicación en un hosting.

# Desarrollo:

➔ La aplicación del servidor se desarrolló con NodeJs y Express. Se documentó con Swagger. Se deployó en Railway.

➔ La aplicación del cliente se desarrolló con VanillaJs, Jquery y Boopstrap4. Se deployó en Netlity.

<h2 align="center">Api Rest (Backend)</h2>

# Petición HTTP - Endpoints:

  * GET /
  
  Ruta Pagina principal de entrada y Page Not Found 404: 
  
  URL: 
  
      https://bsale-server.up.railway.app/
      
  Estructura JSON:
      
      {
      "msg":"404 Page",
      "project":"Bsale - Test",
      "author":"Zayra Velasco",
      "description":"rest api (incomplete) for bsale store with node, express & mysql",
      "version":"1.0.0",
      "doc":"https://bsale-server.up.railway.app/api-docs/"
      }
  
  * GET /products 
  
  Obtiene todos los productos de la base de datos: 
  
  URL: 
  
      https://bsale-server.up.railway.app/products 
      
  Estructura JSON:
      
      {
      "message":"all products ",
      "data":
        [
          {
            "id":5,
            "category":1,
            "name":"ENERGETICA MR BIG",
            "url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
            "price":1490,
            "discount":20
          }
        ]
      }
  
  Acepta las siguientes queries (opcionales):
  
  Category: 
  
  Debe ser el id de la categoria (número entero)
      
  * GET  /products?category=2 
      
  Name: 
  
  Texto que forme parte del nombre de uno o varios productos (texto)
      
  * GET  /products?name=carmen
      
  Page: 
  
  Número de página de la respuesta (número entero). Por defecto 1.
      
  * GET  /products?page=1
      
  Size: 
  
  Filas o entradas por pagina (número entero). Por defecto 100.
      
  * GET  /products?size=5
      
  Order: 
  
  Dirección del ordenamiento de las entradas. Puede ser asc or desc (No es sensible a mayúsculas o minúsculas). Usa el id del producto como criterio de ordenamiento. Por defecto es ASC (ascendente).
      
  * GET  /products?order=desc
      
  Ejemplo de una URL para obtener la primera pagina con 5 filas (productos) de todos los productos que contengan "carmen" en su nombre y pertenezcan a la categoria 2, ordenados por su id en forma descendente:
  
      https://bsale-server.up.railway.app/products?name=carmen&category=2&page=1&size=5&order=desc    
  
  * GET /api-docs
  
  Documentación con Swagger.
  
  URL:
  
      https://bsale-server.up.railway.app/api-docs
      
## Snips

<p align="center">GET endpoint sin queries</p>

![get](https://user-images.githubusercontent.com/95602965/195794597-cc259d6d-5976-4dde-9023-30ccb5b355a9.png)

<p align="center">GET endpoint con queries</p>

![getqueries](https://user-images.githubusercontent.com/95602965/195794602-8304811f-1838-4db2-9332-9bab145fad1b.png)

<p align="center">Respuesta cuando se ingresa una texto en la query category que acepta números enteros</p>

![validations](https://user-images.githubusercontent.com/95602965/195794606-fd7cee76-8f3d-40e3-9831-dbb7aaf608b9.png)

<p align="center">Respuesta cuando no hay registros en la pagina solicitada</p>

![validations2](https://user-images.githubusercontent.com/95602965/195794612-794c2e5b-958f-4735-9ccd-f049dea7c616.png)

<p align="center">Respuesta cuando no se encuentra categoría con el id ingresado</p>

![validations3](https://user-images.githubusercontent.com/95602965/195794615-0352ea7e-3055-4087-9750-3bee85234990.png)

<p align="center">Documentation Swagger</p>

![doc1](https://user-images.githubusercontent.com/95602965/195952800-1db94f89-17ee-4b68-b5b6-60d731578e63.png)
![doc2](https://user-images.githubusercontent.com/95602965/195952802-5eae980a-e017-4566-85c4-40f012f56d21.png)


<h2 align="center">---------------- ENGLISH ----------------</h2>
💻 It is a NodeJS Apirest (incomplete) for bsale challenge. It is part of a full stack project.

* Database (mySql)
* API rest building (Express)
* Functionality: get products filtered (by category id) or not (default) + pagination (page, size and order)
* Documentation: Swagger

## Deployment (Railway)

Endpoints:
  * Index (Root and 404 Page): https://bsale-server.up.railway.app/
  * Products: https://bsale-server.up.railway.app/products or https://bsale-server.up.railway.app/products?name=carmen&category=2&page=1&size=5&order=desc
    Query params (not required):
      - category: category id (integer)
      - page: response page (integer)
      - size: rows per page (integer)
      - order: rows id order (asc or desc - case no sensitive)
  * Documentation: https://bsale-server.up.railway.app/api-docs

## Contact info

* Zayra Velasco linkedIn ☞ <a href="https://www.linkedin.com/in/zayra-velasco">linkedIn</a> / <a href="mailto:zayra.contacto@gmail.com">email</a>


Good Life! ( ͡~ ͜ʖ ͡°)
