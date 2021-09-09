const express=require("express");
const usersRouter=express.Router();

usersRouter.post("/",register);
usersRouter.get("/:id",getUserById);


module.exports=usersRouter;