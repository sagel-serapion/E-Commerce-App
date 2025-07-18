import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
    maxlength: 20
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    minlength: 4,
    maxlength: 20
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    
  }
});

const User = mongoose.model('User', userSchema);

export default User;
