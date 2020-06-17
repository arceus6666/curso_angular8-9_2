const { exit } = require('yargs');

const argv = require('./config/yargs').argsv;
require("./config/mongoose");
const Usuario = require('./models/usuario').usuario;

const main = async () => {

  let comando = argv._[0];
  switch (comando) {
    case 'createsuperuser':
      const usuario = new Usuario({
        nombre: 'Admin',
        email: argv.email,
        password: argv.password,
        rol: 'ADMIN_ROLE',
      });
      try {
        await usuario.save();
        console.log('Se ha creado el usuario satisfactoriamente');
      } catch (error) {
        console.log(error);
      }
      break;

  }
}

main().then(() => { exit(); });
