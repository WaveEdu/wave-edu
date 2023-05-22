# Message Endpoints

## Gets all messages in a chat

`GET /api/message`

### Body

```json
{ "ChatId": "5f9b2b2b2b2b2b2b2b2b2b2b" }
```

### Response

```json
[
  {
    "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "messageType": "COMUNICAZIONE",
    "createdAt": "2023-05-16T17:21:08.361+00:00",
    "updatedAt": "2023-05-16T17:21:08.361+00:00",
    "ChatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
    "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
    "comunicazione": "Buongiorno"
  }, 
  {
    "id": "5f9b2b2b2b2b2r6r6r6r7f7",
    "messageType": "SONDAGGIO",
    "createdAt": "2023-05-20T17:21:08.361+00:00",
    "updatedAt": "2023-05-20T19:21:08.361+00:00",
    "ChatId": "5f9b2b2b2b2b2b2b2b2b2",
    "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
    "question": "Qual è la capitale dell'Italia?",
    "options":{
        "1": "Verona",
        "2": "Brescia",
        "3": "Venezia",
        "4": "Roma"
    }
  }
]
```
## Get a message by id

`GET /api/message/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the chat |

### Response

```json
{
    "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "messageType": "COMUNICAZIONE",
    "createdAt": "2023-05-16T17:21:08.361+00:00",
    "updatedAt": "2023-05-16T17:21:08.361+00:00",
    "ChatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
    "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
    "comunicazione": "Buongiorno"
} 
```
## Get last messages in a chat

`GET /api/lastmessage`

### Body

```json
{ "ChatId": "5f9b2b2b2b2b2b2b2b2b2b2b" }
```

### Response

```json
[
  {
    "id": "5f9b2b2b2b2b2r6r6r6r7f7",
    "messageType": "SONDAGGIO",
    "createdAt": "2023-05-20T17:21:08.361+00:00",
    "updatedAt": "2023-05-20T19:21:08.361+00:00",
    "ChatId": "5f9b2b2b2b2b2b2b2b2b2",
    "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
    "question": "Qual è la capitale dell'Italia?",
    "options":{
        "1": "Verona",
        "2": "Brescia",
        "3": "Venezia",
        "4": "Roma"
    }
  }
]
```

## Creates a message

`POST /api/message`

### Body

```json
{
  "messageType": "LEZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "data": "2023-06-16T17:21:08.361+00:00",
  "text": "Lezione di Matematica"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4323o3",
  "messageType": "LEZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-16T17:21:08.361+00:00",
  "data": "2023-06-16T17:21:08.361+00:00",
  "text": "Lezione di Matematica"
}
```
### Body

```json
{
  "messageType": "COMPITO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "data": "2023-06-17T17:21:08.361+00:00",
  "text": "Compito di Matematica"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o1",
  "messageType": "COMPITO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-16T17:21:08.361+00:00",
  "data": "2023-06-17T17:21:08.361+00:00",
  "text": "Compito di Matematica"
}
```
### Body

```json
{
  "messageType": "SONDAGGIO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "question": "Qual è la capitale dell'Italia?",
  "options": ["Verona", "Brescia", "Venezia", "Roma"]
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o4",
  "messageType": "SONDAGGIO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-16T17:21:08.361+00:00",
  "question": "Qual è la capitale dell'Italia?",
  "options": ["Verona", "Brescia", "Venezia", "Roma"]
}
```
### Body

```json
{
  "messageType": "EVENTO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "data": "2023-06-20T17:21:08.361+00:00",
  "text": "Gita a Trento"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o9",
  "messageType": "EVENTO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-16T17:21:08.361+00:00",
  "data": "2023-06-20T17:21:08.361+00:00",
  "text": "Gita a Trento"
}
```
### Body

```json
{
  "messageType": "COMUNICAZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "comunicazione": "La classe uscirà un'ora prima"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o8",
  "messageType": "COMUNICAZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-16T17:21:08.361+00:00",
  "comunicazione": "La classe uscirà un'ora prima"
}
```
## Updates a message

`PUT /api/message/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the user |

### Body

```json
{
  "messageType": "LEZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "data": "2023-06-16T17:21:08.361+00:00",
  "text": "Lezione di Algebra"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4323o3",
  "messageType": "LEZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-19T17:21:08.361+00:00",
  "data": "2023-06-16T17:21:08.361+00:00",
  "text": "Lezione di Algebra"
}
```
### Body

```json
{
  "messageType": "COMPITO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "data": "2023-06-17T17:21:08.361+00:00",
  "text": "Compito di Matematica"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o1",
  "messageType": "COMPITO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-19T17:21:08.361+00:00",
  "data": "2023-06-17T17:21:08.361+00:00",
  "text": "Compito di Matematica"
}
```
### Body

```json
{
  "messageType": "SONDAGGIO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "question": "Qual è la capitale dell'Italia?",
  "options": ["Verona", "Brescia", "Firenze", "Roma"]
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o4",
  "messageType": "SONDAGGIO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-19T17:21:08.361+00:00",
  "question": "Qual è la capitale dell'Italia?",
  "options": ["Verona", "Brescia", "Firenze", "Roma"]
}
```
### Body

```json
{
  "messageType": "EVENTO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-19T17:21:08.361+00:00",
  "data": "2023-06-22T17:21:08.361+00:00",
  "text": "Gita a Trento"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o9",
  "messageType": "EVENTO",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-19T17:21:08.361+00:00",
  "data": "2023-06-22T17:21:08.361+00:00",
  "text": "Gita a Trento"
}
```
### Body

```json
{
  "messageType": "COMUNICAZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "comunicazione": "La classe uscirà un'ora prima"
}
```

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o8",
  "messageType": "COMUNICAZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-19T17:21:08.361+00:00",
  "comunicazione": "Annullata uscita anticipata"
}
```

## Deletes a message

`DELETE /api/message/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the user |

### Response

```json
{
  "id": "4g43g2gj3424jg23jj22jg3j2g4324o8",
  "messageType": "COMUNICAZIONE",
  "chatId": "5f9b2b2b2b2b2b2b2b2b2b4f",
  "ownerId": "5f9t5t5t5t5t5t5tt5t5t6e",
  "createdAt": "2023-05-16T17:21:08.361+00:00",
  "updatedAt": "2023-05-19T17:21:08.361+00:00",
  "comunicazione": "Annullata uscita anticipata"
}
```

## Deletes all messages

`DELETE /api/message`
### Body

```json
{ "ChatId": "5f9b2b2b2b2b2b2b2b2b2b2b" }
```

### Response

```json
[
  {
    "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "messageType": "COMUNICAZIONE",
    "createdAt": "2023-05-16T17:21:08.361+00:00",
    "updatedAt": "2023-05-16T17:21:08.361+00:00",
    "ChatId": "5f9b2b2b2b2b2b2b2b2b2b2b",
    "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
    "comunicazione": "Buongiorno"
  }, 
  {
    "id": "5f9b2b2b2b2b2r6r6r6r7f7",
    "messageType": "SONDAGGIO",
    "createdAt": "2023-05-20T17:21:08.361+00:00",
    "updatedAt": "2023-05-20T19:21:08.361+00:00",
    "ChatId": "5f9b2b2b2b2b2b2b2b2b2",
    "ownerId": "5f9t5t5t5t5t5t5tt5t5tt5",
    "question": "Qual è la capitale dell'Italia?",
    "options":{
        "1": "Verona",
        "2": "Brescia",
        "3": "Venezia",
        "4": "Roma"
    }
  }
]
```
