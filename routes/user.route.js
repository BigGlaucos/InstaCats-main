const { Router } = require("express");
const { CreateUserController } = require("../controllers/user.controller");

const UserRouter = Router();

UserRouter.post("/create", CreateUserController);

module.exports = UserRouter;
