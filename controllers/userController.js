const User = require("../models/User.js");

const CreateUserController = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({ name, email, password });

  res.redirect('/');
};

module.exports = {
  CreateUserController,
};
