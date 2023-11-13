const User = require("../models/User.js");

module.exports = class authController {
  static async login(req, res) {
    return res.render("auth/login");
  }
  static async register(req, res) {
    return res.render("auth/register");
  }
  static async registerPost() {}
};
