if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

require("./db");
const mongoose = require("mongoose");
const User = require("./users/user.model");

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  try {
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany();
    }
    let count = await User.countDocuments();
    console.log("Number of users:", count);
    const user = new User({
      username: "admin",
      name: {
        firstName: "Firstname",
        lastName: "Lastname",
      },
      password: "password123",
    });
    await user.generateAuthToken();
    count = await User.countDocuments();
    console.log("Number of users:", count);
    return;
  } catch (e) {
    console.error(e);
    return;
  }
};

// FIXME: if you run node seeds.js, it does the job but hangs. Not 100% sure why
dbReset();
