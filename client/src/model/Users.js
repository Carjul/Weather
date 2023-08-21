
import {Schema,model,models}  from 'mongoose';

const userSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    
  }
);

export default models.Users || model('Users', userSchema);