import express from "express";

import {
    getStoryController,
    postStoryController,
    putStoryController,
    deleteStoryController,
    getlastStoryController
} from "../controllers";

import { isAuthenticated, isTeacher } from "../middlewares";

export default (router: express.Router) => {
    router.get("/story/:id", getStoryController);
    router.get("/laststory", getlastStoryController);
    router.put("/story/:id", isTeacher, putStoryController);
    router.delete("/story/:id", isTeacher, deleteStoryController);
    router.post("/story", isTeacher, postStoryController);
  };
