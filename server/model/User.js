import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      // required: true,
      min: 3,
      max: 15,
    },
    lastName: {
      type: String,
      // required: true,
      min: 3,
      max: 15,
    },
    password: {
      type: String,
      // required: true,
      min: 5,
    },
    email: {
      type: String,
      // required: true,
      unique: true,
      max: 15,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
