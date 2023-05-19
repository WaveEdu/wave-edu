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

server.listen(process.env.API_PORT ?? 3000, () =>
  console.log(`
🚀 Server ready at: ${process.env.DEPLOY_URL ?? "http:localhost"}:${
    process.env.API_PORT ?? 3000
  }/api,\n😄 if you reached this point everything should work`)
);

// api can be accessed at http://localhost:PORT/api
app.use("/api", router());
