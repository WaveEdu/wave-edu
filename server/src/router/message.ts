import express from "express";

import {
    getMessageController,
    getlastMessageController,
    postMessageController,
    putMessageController,
    deleteMessageController,
    getMessagesController,
    deleteMessagesController,
} from "../controllers";

export default (router: express.Router) => {
    router.get("/message", getMessagesController);
    router.get("/message/:id", getMessageController);
    router.get("/message/:id/last", getlastMessageController);
    router.post("/message", postMessageController);
    router.put("/message/:id", putMessageController);
    router.delete("/message/:id", deleteMessageController);
    router.delete("/message", deleteMessagesController);
  };