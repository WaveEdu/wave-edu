# Chat Endpoints

## Gets all chat

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
    "users": "User[]"
  }

  {
    "id chat": "string",
    "name": "String",
    "messages": "Message[]", 
    "users": "User[]"
  }
]
```

## Gets a chat by id

`GET /api/chat:id`

### Parameters

```json
   Name    |  Type  | Description                  
-------------------------------------------------
  id chat | string | Required. Id of the chat 
```

### Response

```json
[
  {
    "name": "String",
    "messages": "Message[]", 
    "users": "User[]"
  }
]
```