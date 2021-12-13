import express from "express";
import {
  editUser,
  removeUser,
  logout,
  see,
} from "../contollers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/remove", removeUser);
userRouter.get(":id", see);

export default userRouter;
