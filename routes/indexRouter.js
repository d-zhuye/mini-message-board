import { Router } from "express";
import { formatMessages } from "../util.js";
import { supabase } from "../config/supabaseClient.js";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const { data } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });
  const formattedMessages = formatMessages(data);
  res.render("../views/index", { messages: formattedMessages });
});

export { indexRouter };
