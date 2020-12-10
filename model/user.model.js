import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    hashPassword: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

UserSchema.methods.comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword)
}

export const User = mongoose.model('User', UserSchema);


