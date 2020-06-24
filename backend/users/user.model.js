// backend/users/user.model.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
      required: true,
      trim: true,
      validate(value) {
        if (value.toLowerCase() === "password") {
          throw new Error("Password can't be password.");
        }
        if (value.length < 6) {
          throw new Error("Password must be at least 6 characters long.");
        }
      },
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
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// Only non-virtual properties work as part of queries and for
// field selection since virtuals are not stored in MongoDB

userSchema.virtual("fullName").get(function () {
  return this.name.nickName || this.name.firstName + " " + this.name.lastName;
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: "7 days",
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// find user by email and password

userSchema.statics.findByCredentials = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Unable to log in.");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login.");
  }
  return user;
};

// hashes our user's passwords whenever a user is created or
// a user password is updated.

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
