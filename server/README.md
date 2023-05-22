# Server

> To try the server see [Run a demo](#run-a-demo)

## Installation

```bash
# node 18.16.0 is required
npm install
```

## Node Commands

```bash
# to start the server
npm run dev

# to start the server without generating the prisma client (faster)
npm run dev:no-generate

# to update the prisma client (after schema changes)
npm run update

# to show the prisma studio (UI for the database)
npm run studio

# to build the server
npm run build

# to start the server in production
npm run start

# to fill the database with fake data DEPRECATED
# npm run seed
```

## `.ENV` file

```bash
# environment (use `development` in local and `production` in production)
NODE_ENV="development"

# port of the server (es. 8080)
API_PORT=

# url of the database
DATABASE_URL=""

# magic auth service
MAGIC_SECRET_KEY=""
MAGIC_PUBLISHABLE_KEY=""

# email service
GMAIL_PASSWORD=""

# secret session key (to create the session cookie)
SECRET_KEY=""
```

## Use with MongoDB Atlas (easy)

Create an account for MongoDB Atlas, create a project, create a database.
The database url is set in the `.env` file (you have to create one, DO NOT push on the repo yours).

```env
DATABASE_URL="mongodb+srv://<username>:<password>@<host>/<db>"
```

## Use with Docker Compose in local (hard)

You need to have Docker and Docker Compose installed on your machine.

```bash
# to start the server
docker-compose up -d

# then follow instructions in the docker-compose.yml file
```

## Notes

In dev mode server restarts automatically every time you save a file.

## Implement a new feature

> in each folder ther is `template.example` file that you can copy and rename to start a new file.
> Commit each step

1. Create a new branch from `dev` branch
2. Implement your feature
   1. create the functions in `src/db` to interact with the database
   2. Export the functions in `src/db/index.ts`
   3. create the functions in `src/controllers` to interact with the client
   4. export the functions in `src/controllers/index.ts`
   5. create the routes in `src/routes` to handle the requests
   6. add the routes in `src/routes/index.ts`
3. Test your feature

## Run a demo

Using Postman or Insomnia, send a `POST` request to `https://wave-edu-server.onrender.com/api/auth/link` with the following body:

```json
{
  "email": "samumaz01@gmail.com"
}
```

Because we leaved the dev mode, you will not receive any mail. In you cookies there should be already the token to access the protected routes.

Run a `GET` request to `https://wave-edu-server.onrender.com/api/auth/login` and you should receive the following response:

> 200 OK

Then you can try to access the protected routes. Run a `GET` request to `https://wave-edu-server.onrender.com/api/user` and you should receive the following response:

> 200 OK

```json
[
  {
    "id": "645bc94420f7e891ad62f99c",
    "email": "samumaz01@gmail.com",
    "name": "Samuele Mazzei",
    "userType": "TEACHER",
    "chatIDs": ["645bc94520f7e891ad62f9a0"]
  },
  {
    "id": "645bc94420f7e891ad62f99d",
    "email": "pippo@example.com",
    "name": "Pippo",
    "userType": "STUDENT",
    "chatIDs": []
  },
  {
    "id": "645bc94420f7e891ad62f99e",
    "email": "pluto@example.com",
    "name": "Pluto",
    "userType": "STUDENT",
    "chatIDs": []
  }
]
```
