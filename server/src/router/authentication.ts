import express from "express";

import { postAuthLinkController, getAuthLoginController } from "../controllers";

export default (router: express.Router) => {
  router.post("/auth/link", postAuthLinkController);
  router.get("/auth/login", getAuthLoginController);
};
