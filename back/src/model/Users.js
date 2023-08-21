const {Schema,model}  =require('mongoose');

const userSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    
  }

);

module.exports = model('users', userSchema);