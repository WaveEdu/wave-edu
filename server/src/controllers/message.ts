import express from "express";
import Sondaggio from "@prisma/client";
import {
    getMessagesOfChat,
    getUltimateMessagesOfChat,
    createMessage2,
    lastMessage,
    createMessage,
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
      const { id } = req.params;
  
      if (!id) return res.sendStatus(400);
  
      const message = await lastMessage(id);
  
      if (!message) return res.sendStatus(404);
  
      return res.status(200).json(message).end();
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }

  export async function postMessageController(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const { ownerId, content, messageType } = req.body;
  
      if (!ownerId || !content || !messageType) return res.sendStatus(400);
  
      const message = await createMessage(ownerId, content, messageType);
  
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
      const { ownerId, content, messageType } = req.body;
      if (!ownerId || !content || !messageType) return res.sendStatus(400);
      switch (messageType) {
        case "LEZIONE":
        case "COMPITO":
        case "EVENTO":
            const {data} = req.body
            if (!data) return res.sendStatus(400);
            const message1 = await createMessage2(ownerId, content, messageType, data);
            return res.status(200).json(message1).end();           
        case "SONDAGGIO":
            const {question, options} = req.body
            if (!question || !options) return res.sendStatus(400);
            let sondaggio:Sondaggio = {question:String, options:Array<String>}
            const message2 = await createMessage2(ownerId, content, messageType, sondaggio);
            return res.status(200).json(message2).end(); 
        case "COMUNICAZIONE":
            const message = await createMessage2(ownerId, content, messageType);
            return res.status(200).json(message).end();
      default:
        return res.sendStatus(400)    
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
      const { name } = req.body;
      const { id } = req.params;
  
      if (!id) return res.sendStatus(400);
  
      const message = await updateMessage(id, name);
  
      return res.status(200).json(message).end();
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
  