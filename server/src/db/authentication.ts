import { PrismaClient, User, UserType } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  return user;
}

export async function saveToken(
  userId: string,
  token: string,
  validUntil: Date,
  cookieToken: string
) {
  const savedToken = await prisma.magicLink.create({
    data: {
      userId: userId,
      token: token,
      validUntil: validUntil,
      cookieToken: cookieToken,
    },
  });

  console.dir(savedToken, { depth: Infinity });
  console.log("Token saved!");
  console.log("------------------");
}

export async function validateToken(token: string, cookieToken: string) {
  const validToken = await prisma.magicLink.findFirst({
    where: {
      token,
      cookieToken,
      isUsed: false,
      validUntil: { gte: new Date() },
    },
  });

  return validToken;
}

export async function markTokenAsUsed(id: string) {
  await prisma.magicLink.update({
    data: { isUsed: true },
    where: { id: id },
  });
}
