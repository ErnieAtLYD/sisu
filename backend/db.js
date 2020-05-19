// backend/db.js

import mongoose from "mongoose";

/**
 * Required External Modules
 */
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { DB_URL } = process.env;

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

module.exports = db;
