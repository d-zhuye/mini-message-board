import { Router } from "express";
import { getAllCountries, getBackgroundColor } from "../util.js";
import { supabase } from "../config/supabaseClient.js";

const newMessageRouter = Router();

newMessageRouter.get("/", async (req, res) => {
  const countries = await getAllCountries();

  res.render("../views/newMessage.ejs", { countries });
});

newMessageRouter.post("/", async (req, res) => {
  const { messageAuthor, messageCountry, messageText } = req.body;

  const { error } = await supabase.from("messages").insert({
    author: messageAuthor,
    country: messageCountry,
    text: messageText,
    color: getBackgroundColor(),
  });

  if (error) {
    console.error(error);
    res.status(500).json({ error });
    return;
  }

  console.log("Successfully added to database.");
  res.redirect("/");
});

export { newMessageRouter };
