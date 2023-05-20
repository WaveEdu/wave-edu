import express from "express";

import {
  readChat,
  createChat,
  updateChat,
  deleteChat,
  readChats,
  addParticipantToChat,
  removeParticipantFromChat,
  deleteAllChats,
} from "../db/chat";

export async function getChatController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const chat = await readChat(id);

    if (!chat) return res.sendStatus(404);

    return res.status(200).json(chat).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function postChatController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { ownerId, name } = req.body;

    if (!ownerId || !name) return res.sendStatus(400);

    const chat = await createChat(ownerId, name);

    return res.status(200).json(chat).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function putChatController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { name } = req.body;
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const chat = await updateChat(id, name);

    return res.status(200).json(chat).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteChatController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const chat = await deleteChat(id);

    return res.status(200).json(chat).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getChatsController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const chats = await readChats(id);

    if (!chats) return res.sendStatus(404);

    return res.status(200).json(chats).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteChatsController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { confirm } = req.body;

    if (!confirm) return res.sendStatus(400);

    const chats = await deleteAllChats();

    return res.status(200).json(chats).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function postAddParticipantToChatController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { chatId, userId } = req.params;

    if (!chatId || !userId) return res.sendStatus(400);

    const chat = await addParticipantToChat(chatId, userId);

    return res.status(200).json(chat).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteRemoveParticipantFromChatController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { chatId, userId } = req.params;

    if (!chatId || !userId) return res.sendStatus(400);

    const chat = await removeParticipantFromChat(chatId, userId);

    return res.status(200).json(chat).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
