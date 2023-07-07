//el index levanta nuestro puerto

const http = require('http');
const app = require('./src/app');

//config de .env

require('dotenv').config();

//Config DB
require('./src/config/db');



//Creamos server
const server = http.createServer(app);

const PORT = process.env.PORT || 3000
server.listen(PORT);



server.on('listening', () => console.log(`Servidor escuchando en puerto ${PORT}`))