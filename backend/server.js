// backend/server.js

const express = require("express");
const path = require("path");
const UserRoutes = require("./users/users");
const CohortRoutes = require("./cohorts/cohort.route");

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
server.use("/api/cohorts", CohortRoutes);

server.get("/", (req, res) => {
  res.status(200).send("TO DO Server");
});

module.exports = server;
