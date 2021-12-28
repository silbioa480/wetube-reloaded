/* 
MongoDB is a general purpose, document-based, distributed
database built for modern application developer and
for the cloud era.
https://www.mongodb.com/

MongoDb vs Mongoose
https://velog.io/@ckstn0777/Mongoose-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

Mongoose is elegant mongodb object modeling for node.js.
https://mongoosejs.com/ */
import mongoose from "mongoose";

// mongoose.connect(url + database)
// url: mongodb://127.0.0.1:27017/
// database: we use database "wetube".
mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error: ", error);

db.once("open", handleOpen);
db.on("error", handleError);

/*
  if command 'mongo' doesn't work and show below error,

  Error: couldn't connect to server 127.0.0.1:27017, connection attempt failed: SocketException: Error connecting to 127.0.0.1:27017 :: caused by :: Connection refused :
  connect@src/mongo/shell/mongo.js:372:17
  @(connect):2:6
  exception: connect failed
  exiting with code 1

  input below code in cmd.

  Linux: mongod --config /etc/mongod.conf --fork
  Intel: mongod --config /usr/local/etc/mongod.conf --fork
  M1: mongod --config /opt/homebrew/etc/mongod.conf --fork
*/
