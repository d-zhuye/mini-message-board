import { Router } from "express";
import { formatMessages } from "../util.js";

const indexRouter = Router();

// sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  const formattedMessages = formatMessages(messages);
  res.render("../views/index", { messages: formattedMessages });
});

export { indexRouter };
