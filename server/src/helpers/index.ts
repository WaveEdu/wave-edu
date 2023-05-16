// This file contains helper functions that are used throughout the application.

export function log(obj: Object) {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  console.dir(obj, { depth: Infinity });
}
