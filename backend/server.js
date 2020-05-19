// backend/server.js

import express from "express";
import path from "path";
import { default as UserRoutes } from "./routes/api/users";

/**
 * Server Variables
 */

const server = express();

/**
 *  Server Configuration
 */

server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */
server.use("/api/users", UserRoutes);

server.get("/", (req, res) => {
  res.status(200).send("TO DO Server");
});

module.exports = server;
