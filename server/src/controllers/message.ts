import express from "express";
import {
  Compito,
  Comunicazione,
  Evento,
  Lezione,
  Sondaggio,
} from "@prisma/client";
import {
  getMessagesOfChat,
  createMessage2,
  lastMessage,
  getMessageById,
  deleteMessage,
  removeAllMessagesChat,
  updateMessage,
} from "../db/message";

export async function getMessageController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const message = await getMessageById(id);

    if (!message) return res.sendStatus(404);

    return res.status(200).json(message).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getlastMessageController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { ChatId } = req.body;

    if (!ChatId) return res.sendStatus(400);

    const message = await lastMessage(ChatId);

    if (!message) return res.sendStatus(404);

    return res.status(200).json(message).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function postMessageController2(
  req: express.Request,
  res: express.Response
) {
  try {
    const { chatId, ownerId, messageType } = req.body;
    if (!chatId || !ownerId || !messageType) return res.sendStatus(400);
    switch (messageType) {
      case "LEZIONE":
      case "COMPITO":
      case "EVENTO":
        const { data, text } = req.body;
        if (!data || !text) return res.sendStatus(400);
        if (messageType == "LEZIONE") {
          let oggetto: Lezione = { data, text };
          const message1 = await createMessage2(
            chatId,
            ownerId,
            messageType,
            oggetto,
            undefined,
            undefined,
            undefined,
            undefined
          );
          return res.status(200).json(message1).end();
        } else if (messageType == "COMPITO") {
          let oggetto: Compito = { data, text };
          const message1 = await createMessage2(
            chatId,
            ownerId,
            messageType,
            undefined,
            oggetto,
            undefined,
            undefined,
            undefined
          );
          return res.status(200).json(message1).end();
        } else {
          let oggetto: Evento = { data, text };
          const message1 = await createMessage2(
            chatId,
            ownerId,
            messageType,
            undefined,
            undefined,
            undefined,
            oggetto,
            undefined
          );
          return res.status(200).json(message1).end();
        }
      case "SONDAGGIO":
        const { question, options } = req.body;
        if (!question || !options) return res.sendStatus(400);
        let sondaggio: Sondaggio = { question, options };
        const message2 = await createMessage2(
          chatId,
          ownerId,
          messageType,
          undefined,
          undefined,
          sondaggio,
          undefined
        );
        return res.status(200).json(message2).end();
      case "COMUNICAZIONE":
        const { comunicazione } = req.body;
        if (!comunicazione) return res.sendStatus(400);
        let oggetto: Comunicazione = { comunicazione };
        const message = await createMessage2(
          chatId,
          ownerId,
          messageType,
          undefined,
          undefined,
          undefined,
          undefined,
          oggetto
        );
        return res.status(200).json(message).end();
      default:
        return res.sendStatus(400);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function putMessageController(
  req: express.Request,
  res: express.Response
) {
  try {
    const {id} = req.params;
    const messageId = id;
    if(!messageId) return res.send({"error": "no parameter provided"}).sendStatus(400)
    const { messageType } = req.body;
    if (!messageType) return res.sendStatus(400);
    switch (messageType) {
      case "LEZIONE":
      case "COMPITO":
      case "EVENTO":
        const { data, text } = req.body;
        if (!data || !text) return res.sendStatus(400);
        if (messageType == "LEZIONE") {
          let oggetto: Lezione = { data, text };
          const message1 = await updateMessage(
            messageId,
            messageType,
            oggetto,
            undefined,
            undefined,
            undefined,
            undefined
          );
          return res.status(200).json(message1).end();
        } else if (messageType == "COMPITO") {
          let oggetto: Compito = { data, text };
          const message1 = await updateMessage(
            messageId,
            messageType,
            undefined,
            oggetto,
            undefined,
            undefined,
            undefined
          );
          return res.status(200).json(message1).end();
        } else {
          let oggetto: Evento = { data, text };
          const message1 = await updateMessage(
            messageId,
            messageType,
            undefined,
            undefined,
            undefined,
            oggetto,
            undefined
          );
          return res.status(200).json(message1).end();
        }
      case "SONDAGGIO":
        const { question, options } = req.body;
        if (!question || !options) return res.send({"error": "not enopugh argumentss"});
        let sondaggio: Sondaggio = { question, options };
        const message2 = await updateMessage(
          messageId,
          messageType,
          undefined,
          undefined,
          sondaggio,
          undefined
        );
        return res.status(200).json(message2).end();
      case "COMUNICAZIONE":
        const { comunicazione } = req.body;
        if (!comunicazione) return res.sendStatus(400);
        let oggetto: Comunicazione = { comunicazione };
        const message = await updateMessage(
          messageId,
          messageType,
          undefined,
          undefined,
          undefined,
          undefined,
          oggetto
        );
        return res.status(200).json(message).end();
      default:
        return res.sendStatus(400);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteMessageController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const message = await deleteMessage(id);

    return res.status(200).json(message).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getMessagesController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!id) return res.sendStatus(400);

    const chats = await getMessagesOfChat(id);

    if (!chats) return res.sendStatus(404);

    return res.status(200).json(chats).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteMessagesController(
  req: express.Request,
  res: express.Response
) {
  try {
    const { id } = req.params;

    if (!confirm) return res.sendStatus(400);

    const messages = await removeAllMessagesChat(id);

    return res.status(200).json(messages).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
