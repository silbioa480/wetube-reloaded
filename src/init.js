import "./db";
import "./models/Video";
import "./models/User";

/* 
"init.js" is first execute file at "package.json"

"scripts": {
  "dev": "nodemon -L --exec babel-node src/init.js"
}

and call "server.js" file and create Express Server */
import app from "./server";

const PORT = 4000;

// When Server open, Express listen server port and print log.
app.listen(PORT, () =>
  console.log(`✅ Server listening on port http://localhost:${PORT}!`)
);
