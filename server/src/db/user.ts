import { PrismaClient, User, UserType } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(
  email: string,
  name: string,
  userType: UserType
) {
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

export async function readUser(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  console.dir(user, { depth: Infinity });
  console.log("User found!");
  console.log("------------------");

  return user;
}

export async function updateUser(id: string, email?: string, name?: string) {
  const updatedUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
    },
  });

  console.dir(updatedUser, { depth: Infinity });
  console.log("User updated!");
  console.log("------------------");
}

export async function deleteUser(id: string) {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });

  console.log("User deleted!");
  console.log("------------------");
}

//! DEV ONLY

export async function deleteAllUsers() {
  await prisma.user.deleteMany();

  console.log("All users removed");
  console.log("------------------");
}

export async function getAllUsers() {
  const users = await prisma.user.findMany();

  return users;
}
