# Chat Endpoints

## Gets all users

`GET /api/chat`

### Body

```json
| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id owner | string | Required. Id of the owner |
```

### Response

```json
[
  {
    "id chat": "string",
    "name": "String",
    "messages": "Message[]", 
    "userIDs": "String[]",
    "users": "User[]"
  }

  {
    "id chat": "string",
    "name": "String",
    "messages": "Message[]", 
    "userIDs": "String[]",
    "users": "User[]"
  }
]
```