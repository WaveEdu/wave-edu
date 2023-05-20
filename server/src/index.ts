import express from "express";
import dotenv from "dotenv";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

import router from "./router";

dotenv.config();
const app = express();

app.use(cors({ credentials: true }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

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
🚀 Server ready at: http://localhost:${process.env.API_PORT}/api,\n😄 if you reached this point everything should work`)
);

// api can be accessed at http://localhost:PORT/api
app.use("/api", router());
