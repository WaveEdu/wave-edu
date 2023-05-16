import express from "express";

import { methodModelController } from "controllers/_template";

export default (router: express.Router) => {
  router.get("/user/:id", methodModelController);
//   router.post("/user", postMethodController);
//   router.put("/user/:id", putMethodController);
//   router.delete("/user/:id", deleteMethodController);
};
