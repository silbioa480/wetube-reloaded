import express from "express";
import {
  watchVideo,
  getEdit,
  postEdit,
  deleteVideo,
  getUpload,
  postUpload,
} from "../contollers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watchVideo);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete", deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
