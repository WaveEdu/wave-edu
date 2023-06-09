import { PrismaClient, User, UserType } from "@prisma/client";

const prisma = new PrismaClient();

export async function createChat(userId: string, name: string) {
  //   create chat
  const newChat = await prisma.chat.create({
    data: {
      name: name,
      users: {
        connect: {
          id: userId,
        },
      },
    },
  });

  //   add chat to user
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      chats: {
        connect: {
          id: newChat.id,
        },
      },
    },
  });

  console.dir(newChat, { depth: Infinity });
  console.log("Chat created!");
  console.log("------------------");

  return newChat.id;
}

export async function readChats(userId: string) {
  const chats = await prisma.user.findFirst({
    where: {
      id: userId,
    },
    select: {
      chats: true,
    },
  });

  console.dir(chats, { depth: Infinity });
  console.log("------------------");

  return chats;
}

export async function readChat(chatId: string) {
  const chat = await prisma.chat.findUnique({
    where: {
      id: chatId,
    },
  });

  console.dir(chat, { depth: Infinity });
  console.log("Chat found!");
  console.log("------------------");

  return chat;
}

export async function updateChat(chatId: string, name: string) {
  const updatedChat = await prisma.chat.update({
    where: {
      id: chatId,
    },
    data: {
      name: name,
    },
  });

  console.dir(updatedChat, { depth: Infinity });
  console.log("Chat updated!");
  console.log("------------------");
}

export async function deleteChat(chatId: string) {
  //   remove chat from users
  await prisma.chat.update({
    where: {
      id: chatId,
    },
    data: {
      users: {
        set: [],
      },
    },
  });

  //   delete chat
  await prisma.chat.delete({
    where: {
      id: chatId,
    },
  });

  console.log("Chat deleted!");
  console.log("------------------");
}

export async function deleteAllChats() {
  await prisma.chat.deleteMany();

  console.log("All chats removed");
  console.log("------------------");
}

export async function addParticipantToChat(chatId: string, userId: string) {
  //   add user to chat
  const updatedChat = await prisma.chat.update({
    where: {
      id: chatId,
    },
    data: {
      users: {
        connect: {
          id: userId,
        },
      },
    },
  });

  //   add chat to user
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      chats: {
        connect: {
          id: chatId,
        },
      },
    },
  });

  console.log("Participant added to chat");
  console.dir(updatedUser, { depth: Infinity });
  console.dir(updatedChat, { depth: Infinity });

  console.log("------------------");
}

export async function removeParticipantFromChat(
  chatId: string,
  userId: string
) {
  //   remove chat from user
  const updatedUser = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      chats: {
        disconnect: {
          id: chatId,
        },
      },
    },
  });

  //   remove user from chat
  const updatedChat = await prisma.chat.update({
    where: {
      id: chatId,
    },
    data: {
      users: {
        disconnect: {
          id: userId,
        },
      },
    },
  });

  console.log("Participant removed from chat");
  console.log(updatedUser);
  console.log(updatedChat);
  console.log("------------------");
}
