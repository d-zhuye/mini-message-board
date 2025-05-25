import { Router } from "express";
import { getAllCountries } from "../util.js";
import { messages } from "../db.js";

const newMessageRouter = Router();

newMessageRouter.get("/", async (req, res) => {
  const countries = await getAllCountries();

  res.render("../views/newMessage.ejs", { countries });
});

newMessageRouter.post("/", (req, res) => {
  console.log(req.body);
  const currTime = new Date();
  messages.push({
    text: req.body.messageText,
    user: req.body.messageName,
    country: req.body.messageCountry,
    added: currTime,
  });

  res.redirect("/");
});

export { newMessageRouter };
