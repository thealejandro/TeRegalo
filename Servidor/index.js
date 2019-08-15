const express = require('express');
const morgan = require('morgan'); //Eliminar módulo antes de la versión final para LucaSafe
const app = express();

const { conexion } = require('./DB');

//Configuraciones
app.set('port', process.env.PORT || 3000);

//Conectores
app.use(morgan('Rserver'));
app.use(express.json());

//Rutas


//Inicialización de servidor
app.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ', app.get('port'));
});