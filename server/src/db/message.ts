import { PrismaClient, User, UserType, MessageType, Lezione, Compito, Sondaggio, Evento, Comunicazione} from "@prisma/client";

const prisma = new PrismaClient();

export async function getMessagesOfChat(chatId: string) {
    const messages = await prisma.chat.findMany({
      where: {
        id: chatId,
      }
    });
  
    console.dir(messages, { depth: Infinity });
    console.log("------------------");
  
    return messages;
  }

  export async function createMessage2(
    chatId: string,
    ownerId: string,
    messageType: MessageType,
    // contentSpec: Lezione | Compito | Sondaggio | Evento,
    contentLezione?: Lezione,
    contentCompito?: Compito,
    contentSondaggio?: Sondaggio,
    contentEvento?: Evento,
    contentComunicazione?: Comunicazione
  ) {
    let data: any = {
      messageType: messageType,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      Chat: {
        connect: {
          id: chatId,
        },
      },
      User: {
        connect: {
          id : ownerId,
        }
      }
    };
  
    switch (messageType) {
      case MessageType.LEZIONE:
        data.contentLezione = {
          data: contentLezione?.data || new Date(Date.now()),
          text: contentLezione?.text || "Lezione di Prova",
        };
        break;
      case MessageType.COMPITO:
        data.contentCompito = {
          data: contentCompito?.data || new Date(Date.now()),
          text: contentCompito?.text || "Compito di Prova",
        };
        break;
      case MessageType.SONDAGGIO:
        data.contentSondaggio = {
          question: contentSondaggio?.question || "",
          options: contentSondaggio?.options || [],
        };
        break;
      case MessageType.EVENTO:
        data.contentEvento = {
          data: contentEvento?.data || new Date(Date.now()),
          text: contentEvento?.text || "Evento di Prova",
        };
        case MessageType.COMUNICAZIONE:
          data.contentComunicazione = {
            comunicazione: contentComunicazione?.comunicazione || "Comunicazione di Prova",
          };
    default:
        break;
    }
  
    const newMessage = await prisma.message.create({
      data,
    });
  
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

export async function getUltimateMessagesOfChat(chatId: string) {
    const message = await prisma.chat.findFirst({
      where: {
        id: chatId,
      }
    });
  
    console.dir(message, { depth: Infinity });
    console.log("------------------");
  
    return message;
  }
  
export async function lastMessage(chatID: string){
    const message = await prisma.chat.findUnique({
      where: { id: chatID },
      include: { messages: { orderBy: { createdAt: 'desc' }, take: 1 } },
    });
  
    console.dir(message, { depth: Infinity });
    console.log("------------------");
    
    return message;
  }
  
  export async function getMessageById(messageId: string) {
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
  
  export async function deleteMessage(messageId: string) {
    //   remove message from chat
  
    await prisma.message.delete({
      where: {
        id: messageId,
      },
    });
  
    console.log("Message deleted!");
    console.log("------------------");
  }
  export async function removeAllMessagesChat(chatId: string) {
    await prisma.chat.deleteMany({
      where: {
        id: chatId,
      },
    });
  
    console.log("All messages removed");
    console.log("------------------");
  }
  export async function updateMessage(messageId: string) {
    const updatedMessage = await prisma.message.update({
      where: { id: messageId },
      data: {
        updatedAt: new Date()
      }
    });

    console.dir(updatedMessage, { depth: Infinity });
    console.log("Message Update!");
    console.log("------------------");

    return updatedMessage;
  }