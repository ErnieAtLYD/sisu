// /backend/routes/api/users.js

// https://www.youtube.com/watch?v=mbsmsi7l3r4

import bcrypt from "bcrypt";
import { Router as ExpressRouter } from "express";
import User from "../../models/user.model";

const jwt = require("jsonwebtoken");
const UserRoutes = ExpressRouter();

/**
 * @route    GET api/users
 * @desc     Gets all users
 * @access   public
 */
UserRoutes.get("/", async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.status(200).json({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

/**
 * @route    POST api/users
 * @desc     Register a user
 * @access   public
 */
UserRoutes.post("/", async (req, res) => {
  // FIXME: add JWT
  const { username, password, name, email, profile_name } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({ username, password, name, email, profile_name });
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);
    await user.save();

    const payload = { user: { id: user.id } };
    // jwt.sign(
    //   payload,
    //   config.get("jwtSecret"),
    //   { expiresIn: 360000 },
    //   (err, token) => {
    //     if (err) throw err;
    //     res.status(201).json({
    //       token,
    //       success: true,
    //       message: "User created!",
    //       errors: [],
    //     });
    //   }
    // );
    res.status(200).json(payload);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default UserRoutes;
