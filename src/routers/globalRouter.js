import express from "express";
import { trendingVideo, searchVideo } from "../contollers/videoController";
import { join } from "../contollers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trendingVideo);
globalRouter.get("/join", join);
globalRouter.get("/search", searchVideo);

export default globalRouter;
