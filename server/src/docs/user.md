# User Endpoints

## Gets all users

`GET /api/users`

### Body

```json
{ "email": "email@example.com", "name": "John Doe", "role": "TEACHER" }
```

### Response

```json
[
  {
    "id": "5f9b2b2b2b2b2b2b2b2b2b2b",
    "email": "email@example.com",
    "name": "John Doe",
    "role": "TEACHER"
  },
  {
    "id": "5f9b2b2b2b2b2b2b2b2b2b2b",
    "email": "email@example.com",
    "name": "Hans Zimmer",
    "role": "STUDENT"
  }
]
```

## Gets a user by id

`GET /api/user/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the user |

### Response

```json
{
  "id": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "email": "email@example.com",
  "name": "John Doe",
  "role": "TEACHER"
}
```

## Creates a user

`POST /api/user`

### Body

```json
{
  "email": "example@example.com",
  "name": "John Doe",
  "role": "TEACHER"
}
```

### Response

```json
{
  "id": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "email": "example@example.com",
  "name": "John Doe",
  "role": "TEACHER"
}
```

## Updates a user

`PUT /api/user/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the user |

### Body

```json
{
  "email": "example@example.com",
  "name": "John Doe",
  "role": "TEACHER"
}
```

### Response

```json
{
  "id": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "email": "example@example.com",
  "name": "John Doe",
  "role": "TEACHER"
}
```

## Deletes a user

`DELETE /api/user/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the user |

### Response

```json
{
  "id": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "email": "example@example.com",
  "name": "John Doe",
  "role": "TEACHER"
}
```

## Deletes all users (NOT FOR PRODUCTION)

`DELETE /api/user`

