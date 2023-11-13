const { Router } = require("express");
const AuthRouter = Router();
const AuthController = require("../controllers/auth.controller.js");

AuthRouter.get("/login", AuthController.login);
AuthRouter.get("/register", AuthController.register);
// AuthRouter.post("/");

module.exports = AuthRouter;
