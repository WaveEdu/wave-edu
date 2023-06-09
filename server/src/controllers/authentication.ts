import express from "express";
import path from "path";
import nodemailer, { SentMessageInfo } from "nodemailer";
import {
  getUser,
  markTokenAsUsed,
  saveToken,
  validateToken,
} from "../db/authentication";
import { createEmail, randomToken } from "../helpers";
import * as hbs from "nodemailer-express-handlebars";

export async function postAuthLinkController(
  req: express.Request,
  res: express.Response
) {
  // initialize nodemailer
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "waveedu.login@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // point to the template folder
  const handlebarOptions: hbs.NodemailerExpressHandlebarsOptions = {
    viewEngine: {
      partialsDir: path.resolve("./src/emails/"),
      defaultLayout: false,
    },
    viewPath: path.resolve("./src/emails/"),
  };

  transporter.use("compile", hbs.default(handlebarOptions));

  try {
    const { email } = req.body;

    if (!email) return res.sendStatus(400);

    // Check if the user exists
    const user = await getUser(email);
    if (!user) {
      return res.sendStatus(404);
    }

    const token = randomToken();
    const link = `${
      req.protocol + "://" + req.get("host")
    }/api/auth/login?token=${token}`;

    // Validity limit
    const validUntil = new Date(Date.now() + 15 * 60 * 1000); // in 15 minutes

    // Generete a token to avoid Man In The Middle attack
    const cookieToken = randomToken();
    await saveToken(user.id, token, validUntil, cookieToken);

    if (process.env.NODE_ENV === "production") {
      // Send the link by email
      transporter.sendMail(
        createEmail(email, link),
        (err: Error | null, info: SentMessageInfo) => {
          if (err) {
            return console.log(err);
          } else {
            console.log("Email sent: " + info.response);
          }
        }
      );
    }

    // Set the cookie anti MITM
    res.cookie("node-magic-link-check", cookieToken, { httpOnly: true });

    // Redirect to the sent page
    // res.redirect(`/api/auth/link/sent?email=${email}`);
    console.log("Email sent!");
    // send token to client
    if (process.env.NODE_ENV === "development") {
      // save token in cookie
      res.cookie("dev-magic-link-session", token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
      });
      res.status(200).json({ token: cookieToken }).end();
    } else {
      res
        .status(200)
        .json({ message: "Magic link sent!", cookieToken: cookieToken });
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getAuthLoginController(
  req: express.Request,
  res: express.Response
) {
  try {
    let { token } = req.query;

    // check if the token is present in cookies
    if (process.env.NODE_ENV === "development") {
      const cookieToken = req.cookies["dev-magic-link-session"];
      if (cookieToken) token = cookieToken;
    }

    // send message missing token
    if (!token) return res.status(400).json({ message: "Missing token" });

    // retrieve the token from local cookies
    const cookieToken = req.cookies["node-magic-link-check"];
    if (!cookieToken)
      return res.status(400).json({ message: "Missing cookieToken" });

    // check if the token is valid
    const magicLink = await validateToken(token as string, cookieToken);
    if (!magicLink) return res.status(400).json({ message: "Invalid token" });

    // clear the cookie
    res.clearCookie("node-magic-link-check");

    // mark the token as used
    markTokenAsUsed(magicLink.id);

    // send the session token
    res.cookie("node-magic-link-session", magicLink.token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });

    // redirect to the home page
    console.log("Login success!");
    res.redirect(`${process.env.DEPLOY_URL_CLIENT}/dashboard`);
    // res
    //   .status(200)
    //   .json({ message: "Login success!", sessionToken: magicLink.token });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteLogoutController(
  req: express.Request,
  res: express.Response
) {
  try {
    // retrieve the token from local cookies
    const sessionToken = req.cookies["node-magic-link-session"];
    if (!sessionToken) return res.sendStatus(400);

    // clear the cookie
    res.clearCookie("node-magic-link-session");

    // redirect to the home page
    // res.redirect("/api/auth/logout/success");
    console.log("Logout success!");
    res.status(200).json({ message: "Logout success!" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
