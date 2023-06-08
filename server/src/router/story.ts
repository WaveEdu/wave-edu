import express from "express";

import {
    getStoryController,
    postStoryController,
    putStoryController,
    deleteStoryController,
    getlastStoryController
} from "../controllers";

export default (router: express.Router) => {
    router.get("/story/:id", getStoryController);
    router.get("/laststory", getlastStoryController);
    router.put("/story/:id", putStoryController);
    router.delete("/story/:id", deleteStoryController);
    router.post("/story", postStoryController);
  };