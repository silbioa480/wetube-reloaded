import express from "express";
import { home, searchVideo } from "../contollers/videoController";
import { join, login } from "../contollers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", searchVideo);

export default globalRouter;
