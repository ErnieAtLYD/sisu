// /backend/routes/api/users.js

// https://www.youtube.com/watch?v=mbsmsi7l3r4

import { Router as ExpressRouter } from "express";
import UserController from "./user.controller";

const UserRoutes = ExpressRouter();

UserRoutes.get("/", UserController.getUsers);
UserRoutes.post("/", UserController.postUser);

export default UserRoutes;
