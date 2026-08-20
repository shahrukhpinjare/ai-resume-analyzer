const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const authRouter = Router();

// @routes POST /api/auth/register
// @description register a new user
// @access public

authRouter.post("/register", authController.registerUserController);

// @route POST /api/auth/login
// @description login user with email and passwords
// @access Public

authRouter.post("/login", authController.loginUserController);

// @route GET /api/auth/logout
// @descriptio clear token from user cookie and add the token in blacklist
// @access Public

authRouter.get("/logout", authController.logoutUserController);

// @route GET /api/auth/get-me
// @description get the current logged in user details
// @access private

authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
