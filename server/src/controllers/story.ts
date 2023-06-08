import express from "express";
import {
    getStory,
    createStory,
    lastStory,
    deleteStory,
    updateStory,
    updateStory2
} from "../db/story";

export async function getStoryController(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const { id } = req.params;
  
      if (!id) return res.sendStatus(400);
  
      const story = await getStory(id);
  
      if (!story) return res.sendStatus(404);
  
      return res.status(200).json(story).end();
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }

  export async function postStoryController(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const { ownerId, filePath, deleteDate } = req.body;
  
      if (!ownerId || !filePath || !deleteDate) return res.sendStatus(400);
  
      const story = await createStory(ownerId, filePath, deleteDate);
  
      return res.status(200).json(story).end();
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }

  export async function putStoryController(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const { filePath, deleteDate } = req.body;
      const { id } = req.params;
  
      if (!id) return res.sendStatus(400);
  
      const chat = await updateStory2(id, filePath, deleteDate);
  
      return res.status(200).json(chat).end();
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }
  
  export async function deleteStoryController(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const { id } = req.params;
  
      if (!id) return res.sendStatus(400);
  
      const chat = await deleteStory(id);
  
      return res.status(200).json(chat).end();
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }

  export async function getlastStoryController(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const story = await lastStory();
  
      if (!story) return res.sendStatus(404);
  
      return res.status(200).json(story).end();
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  }