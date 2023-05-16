// This file contains helper functions that are used throughout the application.
import crypto from "crypto";

export function log(obj: Object) {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  console.dir(obj, { depth: Infinity });
}

export function randomToken() {
  return crypto.randomBytes(64).toString("hex");
}

export function createEmail(email: string, link: string) {
  return {
    from: "waveedu.login@gmail.com", // sender address
    to: email, // list of receivers
    subject: "Login to Wave Edu",
    template: "login", // the name of the template file i.e email.handlebars
    context: {
      company: "Wave Edu", // replace {{company}} with My Company
      link: link, // replace {{link}} with the actual url link
    },
  };
}
