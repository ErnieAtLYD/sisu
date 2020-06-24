// backend/users/user.controller.js

const User = require("./user.model");

/**
 * @route    POST api/users/login
 * @desc     Login the user
 * @access   public
 */
exports.login = async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
};

/**
 * @route    POST api/users/logout
 * @desc     Logs out the user by removing the jwt token
 * @access   public
 */
exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });

    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(500).send();
  }
};

/**
 * @route    POST api/users
 * @desc     Register a user
 * @access   public
 */
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
};
