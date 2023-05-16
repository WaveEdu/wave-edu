import { Prisma, PrismaClient, MessageType, Chat } from "@prisma/client";
const prisma = new PrismaClient();

async function getMessagesOfChat(chatId: string) {
  const messages = await prisma.chat.findMany({
    where: {
      id: chatId,
    }
  });

  console.dir(messages, { depth: Infinity });
  console.log("------------------");

  return messages;
}

async function getUltimateMessagesOfChat(chatId: string) {
  const message = await prisma.chat.findFirst({
    where: {
      id: chatId,
    }
  });

  console.dir(message, { depth: Infinity });
  console.log("------------------");

  return message;
}

async function lastMessage(chatID: string){
  const message = await prisma.chat.findUnique({
    where: { id: chatID },
    include: { messages: { orderBy: { createdAt: 'desc' }, take: 1 } },
  });

  console.dir(message, { depth: Infinity });
  console.log("------------------");
  
  return message;
}

async function createMessage(chatId: string, content: string, messageType: MessageType) {
  //   create chat
  const newMessage = await prisma.message.create({
    data: {
      text: content,
      messageType: messageType,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      Chat: {
        connect: {
          id: chatId,
        },
      },
    },
  });

  //   add message to chat
  const updatedChat = await prisma.chat.update({
    where: {
      id: chatId,
    },
    data: {
      messages: {
        connect: {
          id: newMessage.id,
        },
      },
    },
  });

  console.dir(newMessage, { depth: Infinity });
  console.log("Message created!");
  console.log("------------------");

  return newMessage.id;
}

async function getMessageById(messageId: string) {
  const message = await prisma.message.findUnique({
    where: {
      id: messageId,
    },
  });

  console.dir(message, { depth: Infinity });
  console.log("Message found!");
  console.log("------------------");

  return message;
}

async function deleteMessage(messageId: string) {
  //   remove message from chat

  await prisma.message.delete({
    where: {
      id: messageId,
    },
  });

  console.log("Message deleted!");
  console.log("------------------");
}
async function removeAllMessagesChat(chatId: string) {
  await prisma.chat.deleteMany({
    where: {
      id: chatId,
    },
  });

  console.log("All messages removed");
  console.log("------------------");
}

export {
  getMessagesOfChat,
  getUltimateMessagesOfChat,
  createMessage,
  getMessageById,
  deleteMessage,
  removeAllMessagesChat,
};

