import { getUserBySessionToken } from "../db";
import express from "express";
import { get, merge } from "lodash";

export function isAuthenticated(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const sessionToken = req.cookies["node-magic-link-session"];
    if (!sessionToken) return res.sendStatus(401);

    const user = getUserBySessionToken(sessionToken);
    if (!user) return res.sendStatus(401);

    merge(req, { identity: user });

    return next();
  } catch (error) {
    console.error(error);
    res.sendStatus(403);
  }
}
