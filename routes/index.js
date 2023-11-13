const { Router } = require("express");
const { pageHomeController } = require("../controllers/page.controller");
const UserRouter = require("./user.route");
const AuthRouter = require("./auth.route");

const router = Router();

router.get("", pageHomeController);
router.use("/user", UserRouter);
router.use("/auth", AuthRouter);
// router.use("/cats/:id")

module.exports = router;
