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

// Set the HTTP header Access-Control-Allow-Credentials value to true.
// Make sure the HTTP headers Access-Control-Allow-Origin and Access-Control-Allow-Headers are set. Don't use a wildcard *. When you set the allowed origin make sure to use the entire origin including the scheme, i.e. http is not same as https in CORS.
app.use(
  cors({
    origin: process.env.PUBLIC_DEPLOY_URL_CLIENT ?? "http://localhost:5173",
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(process.env.API_PORT ?? 3000, () =>
  console.log(`
🚀 Server ready at: ${
    process.env.PUBLIC_DEPLOY_URL_SERVER ??
    "http://localhost:" + process.env.API_PORT ??
    3000
  }/api,\n😄 if you reached this point everything should work`)
);

// api can be accessed at http://localhost:PORT/api
app.use("/api", router());
