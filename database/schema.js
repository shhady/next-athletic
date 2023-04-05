import mongoose from "mongoose";


const userSchema = mongoose.Schema(
    {
      role: { type: String, default: "trainer" },
      name: { type: String, required: true, trim: true },
      email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        // validate(value) {
        //   if (!validator.isEmail(value)) {
        //     throw new Error("Invalid email");
        //   }
        // },
      },
      password: { type: String, required: true, minlength: 5, trim: true },
      description:{ type: String}
    //   confirmPassword: { type: String, required: true, minlength: 5, trim: true },
    //   tokens: [
    //     {
    //       token: {
    //         type: String,
    //         required: true,
    //       },
    //     },
    //   ],
    },
    {
      timestamps: true,
    }
  );

  let User;
  try {
    User = mongoose.model('User');
  } catch (error) {
    User = mongoose.model('User', userSchema);
  }
  
  module.exports = User;