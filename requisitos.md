# GET /API/PRODUCTS

- Recupere de la bbdd todos los productos y devuelva un array en formato JSON con dichos productos


PRUEBAS:

- Que la url funcione -> Status 200
- Que devuelva un JSON -> Content-Type: application/json
- Que devuelva un ARRAY -> Tipo array
- Que nos devuelve el numero de productos esperados


1. Creamos fichero routes/api.js
2. Creamos fichero routes/api/products.js
3. Todas las rutas que lleguen a app.js con la url /api hay que enviarlas a api.js
4. todas las rutas que lleguen a api.js con la url /api/products hay que enviarlas a products.js
5. dentro de products.js respondemos a la peticion con res.send('chachi pistachi')

# Creacion de productos

- POST /api/products
- Body: name, description, price, available, department, stock



cuando lanzo una prueba debe quedar en el mismo estado
PRUEBAS: 
1. Que la url funcione -> status 200 y content-type es application/json
2. Si tiene definido el _id
3. Comprobar si los datos insertados son correctos

# Recuperar un producto por ID

- GET /api/products/IDPRODUCTO

# Editar un producto

- PUT /api/products/IDPRODUCTO

Antes de test:

- Creo un producto de prueba

Despues de test:
- Borro producto

PRUEBAS:
- Status 200 y Content-Type application/json
- Mirar si se modifican los campos que envie a modificar

# Borrar un producto

- DELETE /api/products/IDPRODUCTO

Antes de los test: 

- Creo un producto exclusivo para borrarlo

Despues del test:

- Borro el producto

PRUEBAS: 

- Probar si la URL funciona
- Comprobar si el producto sigue o no en la BD

# Creacion usuario

POST /api/users/register
Body: username, email, password

1. Mirar en api.js si hay que incluirla
2. Crear el controlador de usuarios
3. Crear el fichero de rutas para usuarios
4. Dentro de la ruta creamos el usuario sobre el modelo con el metodo create


PUT /api/users/IDUSER/buy/IDPRODUCT