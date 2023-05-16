import { PrismaClient } from "@prisma/client";
import {
  addParticipantToChat,
  createChat,
  removeParticipantFromChat,
} from "db/chat";
import { createUser } from "db/user";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  // creates 3 user, one of them as teacher, and 1 chat with the 3 users.
  // Then remove student1 from the chat.

  const teacher = await createUser(
    "teacher1@example.com",
    "Teacher 1",
    "TEACHER"
  );

  const student1 = await createUser(
    "student1@example.com",
    "Student 1",
    "STUDENT"
  );

  const student2 = await createUser(
    "student2@example.com",
    "Student 2",
    "STUDENT"
  );

  const chat = await createChat(teacher.id, "Chat 1");
  addParticipantToChat(chat, student1.id);
  addParticipantToChat(chat, student2.id);

  removeParticipantFromChat(chat, student1.id);

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
