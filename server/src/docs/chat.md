# Chat Endpoints

## Gets all chat

`GET /api/chat`

### Body

```json
   Name    |  Type  |     Description                  
-------------------------------------------------
  ownerId  | string |    Id of the owner
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
]
------------------------------------
[
  {
    "id chat": "string",
    "name": "String",
    "messages": "Message[]", 
    "users": "User[]"
  }
]
```

## Gets a chat by id

`GET /api/chat/:id`

### Parameters

```json
   Name   |  Type  |      Description                  
-------------------------------------------------
  id chat | string |  Required. Id of the chat 
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

## Create a chat

`POST /api/chat`

### Body

```json
   Name    |  Type  |     Description                  
-------------------------------------------------
  ownerId  | string |    Id of the owner
-------------------------------------------------
   name    | string |   name of the chat
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
]
```

## Update a chat by id

`PUT /api/chat/:id`

### Parameters

```json
   Name    |  Type  |      Description                  
-------------------------------------------------
    id     | string |  Required. Id of the chat 
```

### Body

```json
   Name    |  Type  |     Description                  
-------------------------------------------------
   name    | string |   name of the chat
```

### Response

```json
[
  {
    "id chat": "string",
    "name": "String",
  }
]
```

## Delete a chat by id

`DELETE /api/chat/:id`

### Parameters

```json
   Name   |  Type  |      Description                  
-------------------------------------------------
    id    | string |  Required. Id of the chat 
```

### Response

```json
[
  {
    "id": "String",
    "name": "String",
    "messages": "Message[]", 
    "users": "User[]"
  }
]
```

## Delete all chat

`DELETE /api/chat/`

### Body

```json
Confirm
```

### Response

```json
All chats removed
```

## Add a partecipant to a chat

`POST /api/chat/:chatId/participant/:userId`

### Parameters

```json
   Name    |  Type  |     Description                  
-------------------------------------------------
  chatId  | string |    Id of the chat
-------------------------------------------------
  userId  | string |    Id of the user
```

### Response

```json
Participant added to chat
```

## Remove a partecipant from a chat

`DELETE /api/chat/:chatId/participant/:userId`

### Parameters

```json
   Name    |  Type  |     Description                  
-------------------------------------------------
  chatId  | string |    Id of the chat
-------------------------------------------------
  userId  | string |    Id of the user
```

### Response

```json
Participant removed from chat
```