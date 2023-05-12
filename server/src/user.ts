import { Prisma, PrismaClient, User, UserType } from "@prisma/client";
const prisma = new PrismaClient();

// CRUD users

async function readUser(id: string): Promise<User> {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new Error("User not found!");
  }

  console.dir(user, { depth: Infinity });
  console.log("User found!");
  console.log("------------------");

  return user;
}

async function createUser(email: string, name: string, userType: UserType) {
  const user = await prisma.user.upsert({
    where: {
      email: email,
    },
    update: {},
    create: {
      email: email,
      name: name,
      userType: userType,
    },
  });
  console.dir(user, { depth: Infinity });
  console.log("User created!");
  console.log("------------------");

  return user;
}

async function updateUser(user: User) {
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
    },
  });

  console.dir(updatedUser, { depth: Infinity });
  console.log("User updated!");
  console.log("------------------");
}

async function removeUser(userId: string) {
  await prisma.user.delete({
    where: {
      id: userId,
    },
  });

  console.log("User deleted!");
  console.log("------------------");
}

//! DEV ONLY

async function deleteAllUsers() {
  await prisma.user.deleteMany();

  console.log("All users removed");
  console.log("------------------");
}

export { readUser, createUser, updateUser, removeUser, deleteAllUsers };
