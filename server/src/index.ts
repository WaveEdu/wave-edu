import express from "express";
import * as user from "./user";
import * as chat from "./chat";
import * as message from "./message";

const app = express();

app.use(express.json());

app.get(`/user/:id`, async (req, res) => {
  const { id } = req.params;
  const data = await user.readUser(id);
  res.json(data);
});

app.post(`/user`, async (req, res) => {
  const { email, name, userType } = req.body;
  const data = await user.createUser(email, name, userType);
  await console.log(data);
  res.json(data);
});

app.get("/", (req, res) => {
  res.json({ message: "It is alive!" });
});

app.get(`/message/:id`, async (req, res) => {
  const { id } = req.params;
  const data = await message.getMessagesOfChat(id);
  res.json(data);
});

app.post(`/message`, async (req, res) => {
  const { chatId, content, messageType } = req.body;
  const data = await message.createMessage(chatId, content, messageType);
  await console.log(data);
  res.json(data);
});
const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000,\n😄 if you reached this point everything should work`)
);

//TODO This will be removed
async function main() {
  console.log(`... starting function to test ...`);
  // try here the functions you want to test
  console.log(`... ending function to test ...`);
}

main();
