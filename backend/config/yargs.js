const argsv = require('yargs')
  .command('createsuperuser', 'Crea un usuario Administrador', {
    email: {
      demand: true,
      alias: 'e',
      desc: 'Email de usuario'
    },
    password: {
      demand: true,
      alias: 'p',
      desc: 'Contraseña del usuario'
    }
  })
  .help()
  .argv;

module.exports = {
  argsv
}
