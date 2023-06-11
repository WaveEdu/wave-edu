import express from "express";

import user from "./user";
import chat from "./chat";
import message from "./message"
import authentication from "./authentication";
import story from "./story";

const router = express.Router();

export default (): express.Router => {
  user(router);
  chat(router);
  message(router)
  authentication(router);
  story(router);
  // add more routers here
  return router;
};
