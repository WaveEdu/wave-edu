import express from "express";

import {
  getMessageController,
  getlastMessageController,
  putMessageController,
  deleteMessageController,
  getMessagesController,
  deleteMessagesController,
  postMessageController2,
} from "../controllers";

export default (router: express.Router) => {
  router.get("/messages/:chatId", getMessagesController);
  router.get("/message/:id", getMessageController);
  router.get("/lastmessage", getlastMessageController);
  router.put("/message/:id", putMessageController);
  router.delete("/message/:id", deleteMessageController);
  router.delete("/message", deleteMessagesController);
  router.post("/message", postMessageController2);
};
