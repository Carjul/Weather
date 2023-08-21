
import {Schema,model}  from 'mongoose'

const userSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    
  }
);

export default model('users', userSchema);