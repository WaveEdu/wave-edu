import express from "express";

import {
  deleteChatController,
  deleteChatsController,
  getChatController,
  getChatsController,
  postAddParticipantToChatController,
  postChatController,
  putChatController,
} from "../controllers";

export default (router: express.Router) => {
  router.get("/chat", getChatsController);
  router.get("/chat/:id", getChatController);
  router.post("/chat", postChatController);
  router.put("/chat/:id", putChatController);
  router.delete("/chat/:id", deleteChatController);
  router.delete("/chat", deleteChatsController);
  router.post(
    "/chat/:chatId/participant/:userId",
    postAddParticipantToChatController
  );
  router.delete("/chat/:chatId/participant/:userId", deleteChatController);
};
