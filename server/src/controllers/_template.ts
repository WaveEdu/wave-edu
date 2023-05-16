import express from "express";

//* replace <model> with the name of the model (User, Chat, etc.)
//* replace <dbFunction> with the name of the function (createUser, readChat, etc.)
//? uncomment the following line to import the database functions
// import {<dbFunction>} from "db/<model>";

//* keep Controller at the end of the function name
//* replace <Model> with the name of the model (User, Chat, etc.)
//* replace <method> with the name of the method (get, post, put, delete)
//? uncomment the following line to import the method
export async function methodModelController(
  req: express.Request,
  res: express.Response
) {
  try {
    //* replace <id> with the name of the id parameter (:id)
    // const { id } = req.params;
    //* replace <...> with the name of the parameters
    // const { ... } = req.body;
    // if (!id) return res.sendStatus(400);
    // const <model> = await <dbFunction>(id);
    //* not always necessary to check if the model exists
    // if (!<model>) return res.sendStatus(404);
    // return res.status(200).json(<model>).end();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
