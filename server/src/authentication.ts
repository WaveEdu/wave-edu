// import { Request, Response } from "express";
// import { CustomAuthenticationResponse } from "nodemailer/lib/smtp-connection";
// const { PrismaClient } = require("@prisma/client");
// const db = new PrismaClient();
// const crypto = require("crypto");
// const hbs = require("nodemailer-express-handlebars");
// const nodemailer = require("nodemailer");
// const path = require("path");

// // initialize nodemailer
// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "waveedu.login@gmail.com",
//     pass: process.env.GMAIL_PASSWORD,
//   },
// });

// // point to the template folder
// const handlebarOptions = {
//   viewEngine: {
//     partialsDir: path.resolve("./emails/"),
//     defaultLayout: false,
//   },
//   viewPath: path.resolve("./emails/"),
// };

// // use a template file with nodemailer
// transporter.use("compile", hbs(handlebarOptions));

// app.post("/auth/link", async (req: Request, res: Response) => {
//   console.log("1check");
//   // 1. Retrieve the value of the email from the request object
//   const email = req.body.email;

//   // 2. Find the corresponding user
//   const user = await db.user.findUnique({ where: { email: email } });
//   if (!user) {
//     console.log("2check");
//     return res.sendStatus(404); // User not found!
//   }

//   // 3. Generate a random token and a corresponding link
//   const token = crypto.randomBytes(64).toString("hex");
//   const link = `${
//     req.protocol + "://" + req.get("host")
//   }/auth/login?token=${token}`;

//   // 4. Don't forget to attach a validity limit!
//   const validUntil = new Date(Date.now() + 15 * 60 * 1000); // in 15 minutes

//   // 5. Save the token in the database
//   await db.magicLink.create({
//     data: {
//       userId: user.id,
//       token,
//       validUntil,
//     },
//   });

//   // 6. Send the link by email
//   transporter.sendMail(
//     {
//       from: "waveedu.login@gmail.com", // sender address
//       to: email, // list of receivers
//       subject: "Login to Wave Edu",
//       template: "login", // the name of the template file i.e email.handlebars
//       context: {
//         company: "Wave Edu", // replace {{company}} with My Company
//         link: link, // replace {{link}} with the actual url link
//       },
//     },
//     function (error: Error, info: CustomAuthenticationResponse) {
//       if (error) {
//         return console.log(error);
//       }
//       console.log("Message sent: " + info.response);
//     }
//   );

//   // 7. We're done here!
//   res.redirect(`/auth/link/sent?email=${email}`);
// });

// app.get("/auth/link/sent", (req: Request, res: Response) => {
//   const email = req.query.email;

//   res.send(`
//   <html lang="en">
//   <body>
//     <p>Link sent to <strong>${email}</strong>.</p>
//   </body>
//   </html>
//   `);
// });

// app.get("/auth/login", async (req: Request, res: Response) => {
//   // 1. Retrieve the token from the query string of the request
//   const token = req.query.token;
//   if (!token) {
//     return res.sendStatus(400);
//   }

//   // 2. Validate token
//   const magicLink = await db.magicLink.findFirst({
//     where: { token, isUsed: false, validUntil: { gte: new Date() } },
//   });
//   if (!magicLink) {
//     return res.sendStatus(404);
//   }

//   // 3. Mark the link as used, to avoid replay attacks
//   await db.magicLink.update({
//     data: { isUsed: true },
//     where: { id: magicLink.id },
//   });

//   // 4. Create a user session and redirect the user
//   // TODO: this will depend on your exact app setup ...
//   const user = await db.user.findUnique({ where: { id: magicLink.userId } });

//   res.send({ user });
// });
