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
chat found!
-----------------------------
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
Chat created!
```

## Update a chat by id

`PUT /api/chat/:id`

### Parameters

```json
   Name    |  Type  |      Description                  
-------------------------------------------------
  id chat  | string |  Required. Id of the chat 
```

### Body

```json
   Name    |  Type  |     Description                  
-------------------------------------------------
   name    | string |   name of the chat
```

### Response

```json
Chat updated!
```

## Delete a chat by id

`DELETE /api/chat/:id`

### Parameters

```json
   Name   |  Type  |      Description                  
-------------------------------------------------
  id chat | string |  Required. Id of the chat 
```

### Response

```json
chat found!
-----------------------------
[
  {
    "name": "String",
    "messages": "Message[]", 
    "users": "User[]"
  }
]
```