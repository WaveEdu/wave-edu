import { getUserBySessionToken } from "../db";
import express from "express";
import { merge } from "lodash";

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

export async function isTeacher(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const sessionToken = req.cookies["node-magic-link-session"];
    if (!sessionToken) return res.sendStatus(401);

    const user = await getUserBySessionToken(sessionToken);
    if (!user) return res.sendStatus(401);

    if (user.userType !== "TEACHER")
      return res.status(403).json({
        message:
          "You are not a teacher. You are not allowed to do this action.",
      });

    merge(req, { identity: user });

    return next();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function isStudent(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  try {
    const sessionToken = req.cookies["node-magic-link-session"];
    if (!sessionToken) return res.sendStatus(401);

    const user = await getUserBySessionToken(sessionToken);
    if (!user) return res.sendStatus(401);

    if (user.userType !== "STUDENT")
      return res.status(403).json({
        message:
          "You are not a student. You are not allowed to do this action.",
      });

    merge(req, { identity: user });

    return next();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
