import { Router } from "express";

const newMessageRouter = Router();

newMessageRouter.get("/new", (reqm, res) => {
  res.send("Create new messages here");
});

export { newMessageRouter };
