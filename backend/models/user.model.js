const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "A username is required."],
      unique: true,
      trim: true,
      minlength: 3,
    },
    password: {
      type: String,
      required: [true, "A password is required."],
    },
    name: {
      firstName: {
        type: String,
        required: [true, "A first name is required."],
        trim: true,
      },
      nickName: String,
      lastName: {
        type: String,
        required: [true, "A last name is required."],
        trim: true,
      },
    },
    email: {
      preferredEmail: String,
      googleEmail: String,
    },
    profileIds: {
      slack: String,
      github: String,
    },
  },
  { timestamps: true }
);
userSchema.virtual("preferredName").get(function () {
  return this.name.nickName || this.name.firstName;
});

// Only non-virtual properties work as part of queries and for
// field selection since virtuals are not stored in MongoDB

userSchema.virtual("fullName").get(function () {
  return this.name.nickName || this.name.firstName + " " + this.name.lastName;
});

const User = mongoose.model("User", userSchema);
module.exports = User;
