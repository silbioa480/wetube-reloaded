import express from "express";
import {
  watchVideo,
  editVideo,
  deleteVideo,
} from "../contollers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watchVideo);
videoRouter.get("/edit", editVideo);
videoRouter.get("/delete", deleteVideo);

export default videoRouter;
