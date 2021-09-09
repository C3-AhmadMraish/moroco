const express = require("express");
const {
  getUserById,
  register,
  follwoUnfollwo,
  searchUsersByName,
} = require("../controllers/users");
const { login } = require("../middlewares/authentication");
const usersRouter = express.Router();

usersRouter.post("/", register);
usersRouter.post("/search", searchUsersByName);
usersRouter.post("/login", login);
usersRouter.get("/:id", getUserById);
usersRouter.put("/:id/follow", follwoUnfollwo);

module.exports = usersRouter;
