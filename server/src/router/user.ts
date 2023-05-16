import express from "express";

import {
  getUserController,
  postUserController,
  putUserController,
  deleteUserController,
  deleteAllUsersController,
} from "../controllers";

export default (router: express.Router) => {
  router.get("/user/:id", getUserController);
  router.post("/user", postUserController);
  router.put("/user/:id", putUserController);
  router.delete("/user/:id", deleteUserController);
  router.delete("/user", deleteAllUsersController);
};
