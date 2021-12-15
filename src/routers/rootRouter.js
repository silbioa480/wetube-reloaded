import express from "express";
import { home, searchVideo } from "../contollers/videoController";
import { getJoin, postJoin, login } from "../contollers/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", searchVideo);

export default rootRouter;
