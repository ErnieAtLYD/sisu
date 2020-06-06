// backend/users/user.controller.js

import User from "./user.model";

/**
 * @route    GET api/users
 * @desc     Gets all users
 * @access   public
 */
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(req.body);
    res.status(200).json({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

/**
 * @route    POST api/users
 * @desc     Register a user
 * @access   public
 */
exports.postUser = async (req, res) => {
  const { username, password, name, email, profile_name } = req.body;
  try {
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }
    user = new User({ username, password, name, email, profile_name });
    await user.save();

    const payload = { user: { id: user.id } };
    res.status(201).json(payload);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};
