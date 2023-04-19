// import {models, Schema, model} from "mongoose";

// const userSchema = Schema(
//     {
//       role: { type: String, default: "user" },
//       name: { type: String, required: true, trim: true },
//       email: {
//         type: String,
//         unique: true,
//         required: true,
//         trim: true,
//         lowercase: true},
//       password: { type: String, required: true, minlength: 5, trim: true },
//       description:{ type: String},
//       confirmPassword: { type: String, required: true, minlength: 5, trim: true },
//       avatar:{type: String},
//       paidDate:{type: Date},
//       paidPeriod:{type:Number},
//       phone:{type:Number}
//     //   tokens: [
//     //     {
//     //       token: {
//     //         type: String,
//     //         required: true,
//     //       },
//     //     },
//     //   ],
//     },
//     {
//       timestamps: true,
//     }
//   );

// //   let User;
// //   try {
// //     User = model('User');
// //   } catch (error) {
// //     User = model('User', userSchema);
// //   }
  
// //   module.exports = User;
// const Users = models.user || model("user", userSchema)
// export default Users;