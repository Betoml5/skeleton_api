const app = require('./app');
const { config } = require('./config/index');
const mongoose  = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('Conexion a la base de datos establecida correctamente')

        app.listen(config.port, () => {
            console.log(`Servidor corriendo correctamente en la url: localhost: ${config.port}`)
        })
    })
    .catch( err => console.error(err) )
