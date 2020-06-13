const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//mongodb://usuario:constraseña@localhost:27017/cursonode

const mongo = mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
  useNewUrlParser: true, useCreateIndex: true
});

mongo
  .then(response => console.log('Conectado a la base de datos'))
  .catch(error => console.log(error));

module.exports = mongo;
