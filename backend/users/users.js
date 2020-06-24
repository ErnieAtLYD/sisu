// /backend/routes/api/users.js

// https://www.youtube.com/watch?v=mbsmsi7l3r4

const Router = require("express");
const UserController = require("./user.controller");
const auth = require("../middleware/auth.js");

const UserRoutes = Router();

UserRoutes.post("/", UserController.createUser);
UserRoutes.post("/login", UserController.login);
UserRoutes.post("/logout", auth, UserController.logout);

module.exports = UserRoutes;
