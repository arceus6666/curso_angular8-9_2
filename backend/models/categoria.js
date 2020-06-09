const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const moment = require("moment-timezone");

const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        require: [true, 'La descripcion es obligatoria']
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        select: false
    },
    creado: { type: Date },
    modificado: { type: Date },
});

categoriaSchema.pre('save', function(next){
    if(this.isNew){
        this.creado = moment().tz('America/La_Paz').format();
    }else{
        this.modificado = moment().tz('America/La_Paz').format();
    }
    next();
});

categoriaSchema.plugin(uniqueValidator, { message: "{PATH} debe ser unico" });

module.exports = mongoose.model('Categoria', categoriaSchema);