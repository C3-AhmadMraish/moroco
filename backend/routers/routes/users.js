const express = require("express");
const {
  getUserById,
  register,
  follwoUnfollwo,
  searchUsersByName,
  updateUserById,
  checkIsFollower
} = require("../controllers/users");

const { login } = require("../controllers/auth/login");
const usersRouter = express.Router();

const authentication = require('../middlewares/authentication')

usersRouter.post("/", register);
usersRouter.get("/:idU/:idF", authentication, checkIsFollower)
usersRouter.post("/search", authentication, searchUsersByName);
usersRouter.post("/login", authentication, login);
usersRouter.get("/:id", authentication, getUserById);
usersRouter.put("/:id/follow", authentication, follwoUnfollwo);
usersRouter.put("/:id",authentication, updateUserById);


module.exports = usersRouter;
