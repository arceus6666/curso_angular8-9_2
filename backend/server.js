const app = require('./config/express');
require("./config/mongoose");
const dotenv = require('dotenv');
const cors = require('cors');

const verificaToken = require("./middlewares/token");
const verificaUsuario = require("./middlewares/autenticacion");
const verificaAdmin = require("./middlewares/autorizacion");
const logs = require('./middlewares/logs');

dotenv.config();

app.use(cors());

app.use('/auth', require('./routes/auth'));
app.use('/usuarios', [verificaToken, verificaUsuario, verificaAdmin], require('./routes/usuario'));
app.use('/categorias', [verificaToken, verificaUsuario, logs], require('./routes/categoria'));
app.use('/productos', [verificaToken, verificaUsuario, logs], require('./routes/productos'));

app.listen(process.env.NODE_PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.NODE_PORT}`);
});