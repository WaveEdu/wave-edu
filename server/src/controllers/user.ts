import express from "express";

import {
  createUser,
  readUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
  getAllUsers,
} from "../db/user";

export async function getUserController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const user = await readUser(id);

    if (!user) return res.sendStatus(404);

    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function postUserController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { email, name, userType } = req.body;

    if (!email || !name || !userType) return res.sendStatus(400);

    const user = await createUser(email, name, userType);

    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function putUserController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { email, name } = req.body;
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const user = await updateUser(id, email, name);

    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteUserController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    await deleteUser(id);

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteAllUsersController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { confirm } = req.body;

    if (!confirm) return res.sendStatus(400);
    await deleteAllUsers();

    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getUsersController(
  req: express.Request,
  res: express.Response
) {
  try {
    const user = await getAllUsers();
    if (!user) return res.sendStatus(404);

    return res.status(200).json(user).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
