import { PrismaClient } from "@prisma/client";
import * as user from "../src/user";
import * as chat from "../src/chat";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  await chat.removeAllChats();
  await user.deleteAllUsers();
  const teacherId = await user.createUser(
    "samumaz01@gmail.com",
    "Samuele Mazzei",
    "TEACHER"
  );
  const studentId1 = await user.createUser(
    "pippo@example.com",
    "Pippo",
    "STUDENT"
  );
  const studentId2 = await user.createUser(
    "pluto@example.com",
    "Pluto",
    "STUDENT"
  );
  const chatId1 = await chat.createChat(teacherId.id, "Chat One");
  const chatId2 = await chat.createChat(teacherId.id, "Chat Two");
  await chat.getChatsOfUser(teacherId.id);

  await chat.addParticipantToChat(chatId1, studentId1.id);
  await chat.addParticipantToChat(chatId1, studentId2.id);

  await chat.addParticipantToChat(chatId2, studentId1.id);
  await chat.deleteChat(chatId1);
  await chat.getChatsOfUser(teacherId.id);

  await chat.removeParticipantFromChat(chatId2, studentId1.id);
  await chat.getChatsOfUser(teacherId.id);
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
