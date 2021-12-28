import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

/* 
Express is a minimal and flexible Node.js web application framework
that provides a robust set of features for web and mobile applications.
http://expressjs.com/

express(); means
Creates an Express application.
The express() function is a top-level function
exported by the express module. */
const app = express();

/* 
Pug is a high-performance template engine
heavily influenced by Haml and
implemented with JavaScript for Node.js and browsers.
https://pugjs.org/api/getting-started.html

app.set("view engine", "pug"); means
using pug as html helper(view engine) to Express. */
app.set("view engine", "pug");
// views folder save .pug files.
// views directory path = workspace path + "/src/views"
app.set("views", process.cwd() + "/src/views");

/* 
Morgan is HTTP request logger middleware for node.js.
https://www.npmjs.com/package/morgan
using Morgan API for checking log. */
const logger = morgan("dev");
app.use(logger);

/* 
express.urlencoded([options])
This is a built-in middleware function in Express.
It parses incoming requests with urlencoded payloads 
and is based on body-parser.
http://expressjs.com/en/5x/api.html#express.urlencoded

app.use(express.urlencoded({ extended: true })); means
reading information from html form tag. */
app.use(express.urlencoded({ extended: true }));

/* 
Router is an object is an isolated instance of middleware and routes. 
You can think of it as a “mini-application,” 
capable only of performing middleware and routing functions. 
Every Express application has a built-in app router.
http://expressjs.com/en/5x/api.html#router */

/*
/ 
    videoController.home
        get: views/home.pug
/join
    userController{getJoin, postJoin}
        get: views/join.pug, 
        post: models/Users.create(name, username, email, password, location)
/login
    userController.login
/search
    videoController.searchVideo
        get: views/search.pug  */
app.use("/", rootRouter);

/*
/users/:id -> See User
/users/logout -> Log Out
/users/edit -> Edit MY Profile
/users/delete -> Delete MY Profile  */
app.use("/users", userRouter);

/*
/videos/:id
    videoController.watchVideo
        get: views/watch.pug
/videos/:id/edit
    videoController{getEdit, postEdit}
        get: views/edit.pug,
        post: models/Video.findByIdAndUpdate(id, title, description, hashtags)
/videos/:id/delete
    videoController.deleteVideo
        post: models/Video.findByIdAndDelete(id)
/videos/upload
    videoController{getUpload, postUpload} 
        get: views/upload.pug
        post: models/Video.create(title, description, hashtags)

/videos/comments -> Comment on a Video
/videos/comments/delete -> Delete A Comment of a Video  */
app.use("/videos", videoRouter);

export default app;
