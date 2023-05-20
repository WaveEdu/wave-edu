import express from "express";

import {
    getMessagesOfChat,
    getUltimateMessagesOfChat,
    lastMessage,
    createMessage,
    getMessageById,
    deleteMessage,
    removeAllMessagesChat,
    updateMessage,
} from "../db/message";