import { Router } from "express";
import { getAllCountries } from "../util.js";

const newMessageRouter = Router();

newMessageRouter.get("/new", async (req, res) => {
  const countries = await getAllCountries();

  res.render("../views/newMessage.ejs", { countries });
});

newMessageRouter.post("/new", (req, res) => {});

export { newMessageRouter };
