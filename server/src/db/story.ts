import { PrismaClient, User, UserType, MessageType, Lezione, Compito, Sondaggio, Evento, Comunicazione} from "@prisma/client";

const prisma = new PrismaClient();

export async function getStory(chatId: string) {
    const story = await prisma.story.findUnique({
      where: {
        id: chatId,
      }
    });
  
    console.dir(story, { depth: Infinity });
    console.log("------------------");
  
    return story;
  }

  export async function createStory(
    ownerId: string,
    filePath: string,
    deleteDate: Date
  ) {
    const newStory = await prisma.story.create({
        data: {
          ownerId: ownerId,
            filePath: filePath,
            deleteDate: deleteDate,
        },
      });
  
    console.dir(newStory, { depth: Infinity });
    console.log("Message created!");
    console.log("------------------");
    return newStory.id;
  }
 
  export async function lastStory(){
    const story = await prisma.story.findFirst();
  
    console.dir(story, { depth: Infinity });
    console.log("------------------");
    
    return story;
  }

  export async function deleteStory(storyId: string) {
    //   remove story
  
    await prisma.story.delete({
      where: {
        id: storyId,
      },
    });
  
    console.log("Story deleted!");
    console.log("------------------");
  }

  export async function updateStory(storyId: string, deleteDate: Date) {
    const updatedStory = await prisma.story.update({
      where: {
        id: storyId,
      },
      data: {
        deleteDate: deleteDate,
      },
    });
  
    console.dir(updatedStory, { depth: Infinity });
    console.log("Story updated!");
    console.log("------------------");
  }

  export async function updateStory2(storyId: string, filePath: string, deleteDate: Date) {
    const updatedStory = await prisma.story.update({
      where: {
        id: storyId,
      },
      data: {
        filePath: filePath,
        deleteDate: deleteDate,
      },
    });
  
    console.dir(updatedStory, { depth: Infinity });
    console.log("Story updated!");
    console.log("------------------");
  }