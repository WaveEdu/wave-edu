import express from "express";

import {
  getUserController,
  postUserController,
  putUserController,
  deleteUserController,
  deleteAllUsersController,
  getUsersController,
} from "../controllers";

import { isAuthenticated, isTeacher } from "../middlewares";

export default (router: express.Router) => {
  router.get("/user/:id", getUserController);
  router.post("/user", postUserController);
  router.put("/user/:id", putUserController);
  router.delete("/user/:id", deleteUserController);
  router.delete("/user", deleteAllUsersController);
  router.get("/user", isTeacher, getUsersController);
};
