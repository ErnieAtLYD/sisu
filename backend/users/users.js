// /backend/routes/api/users.js

// https://www.youtube.com/watch?v=mbsmsi7l3r4

import { Router as ExpressRouter } from "express";
import UserController from "./user.controller";

const auth = require("../middleware/auth.js");

const UserRoutes = ExpressRouter();

UserRoutes.post("/", UserController.createUser);
UserRoutes.post("/login", UserController.login);
UserRoutes.post("/logout", auth, UserController.logout);

export default UserRoutes;
