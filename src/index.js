// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";

// import express from 'express';
// const app = express();

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at PORT ${process.env.PORT}`);
    });

    app.on("error", (err) => {
      console.log("ERROR: " + err);
      throw err;
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!!", err);
  });

/*

import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err) => {
      console.log("ERROR: " + err);
      throw err;
    });
  
    app.listen(process.env.PORT, () => {
      console.log("App is listening on port " + process.env.PORT);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
