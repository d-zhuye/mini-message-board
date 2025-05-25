import { Router } from "express";
import { formatMessages } from "../util.js";
import { messages } from "../db.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const formattedMessages = formatMessages(messages);
  res.render("../views/index", { messages: formattedMessages });
});

export { indexRouter };
