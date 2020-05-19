// index.js

/**
 * Required External Modules
 */
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import server from "./backend/server";
import db from "./backend/db";

// FIXME: unsure on whether to keep this here or move to server

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

/**
 * App Variables
 */
const port = process.env.PORT || "8000";

/**
 * Server Activation
 */
server.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
