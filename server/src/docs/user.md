# User Endpoints

## Gets all users

`GET /api/users`

## Body

```json
{ "email": "email@example.com", "name": "John Doe", "role": "TEACHER" }
```

## Response

```json
[
  {
    "id": "5f9b2b2b2b2b2b2b2b2b2b2b",
    "email": "email@example.com",
    "name": "John Doe",
    "role": "TEACHER"
  }
]
```
