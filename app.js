import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "path";
import { indexRouter } from "./routes/indexRouter.js";
import { newMessageRouter } from "./routes/newMessageRouter.js";

/*
  Call this project Odinite's Messages of Inspiration

  A messaging board where people can add "post-it notes styled" messages to
  encourage their fellow students from The Odin Project. 

  -- Form Fields --
  Name
  Country
  Encouraging Message 

*/

// Static Variables
const PORT = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Server Configuration
const app = express();
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
app.use(express.urlencoded({ extended: true }));

// Serve Static Asserts
app.use(express.static("public"));

// Views Template Configuration
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newMessageRouter);
