const express=require("express");
const {getUserById} = require("../controllers/users")
const usersRouter=express.Router();

usersRouter.get("/:id",getUserById);

module.exports=usersRouter;