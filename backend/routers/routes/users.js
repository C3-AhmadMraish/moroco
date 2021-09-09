const express=require("express");
const {getUserById,register,follwoUnfollwo} = require("../controllers/users");
const usersRouter=express.Router();

usersRouter.post("/",register);
usersRouter.get("/:id",getUserById);
usersRouter.put("/:id/follow",follwoUnfollwo);

module.exports=usersRouter;