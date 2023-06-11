# Story Endpoints

## Get a story by id

`GET /api/story/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the story |

### Response

```json
{
    "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "ownerId": "ds9fs9awe0affg7sg6s",
    "filePath": "www.mydrive.com",
    "deleteDate": "2023-05-30T17:21:08.361+00:00"
} 
```
## Get last story

`GET /api/laststory`

### Response

```json
[
  {
    "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "ownerId": "ds9fs9awe0affg7sg6s",
    "filePath": "www.mydrive.com",
    "deleteDate": "2023-05-30T17:21:08.361+00:00"
    }
]
```

## Create a story

`POST /api/story`

### Body

```json
{
  "ownerId": "ds9fs9awe0affg7sg6s",
  "filePath": "www.mydrive.com",
  "deleteDate": "2023-05-30T17:21:08.361+00:00"
}
```

### Response

```json
{
    "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "ownerId": "ds9fs9awe0affg7sg6s",
    "filePath": "www.mydrive.com",
    "deleteDate": "2023-05-30T17:21:08.361+00:00"
    }
```
## Update a story

`PUT /api/story/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the story |

### Body

```json
{
  "filePath": "www.my2drive.com",
  "deleteDate": "2023-06-02T17:21:08.361+00:00"
}
```

### Response

```json
{
  "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "ownerId": "ds9fs9awe0affg7sg6s",
    "filePath": "www.my2drive.com",
  "deleteDate": "2023-06-02T17:21:08.361+00:00"
    }
```

## Delete a story

`DELETE /api/story/:id`

## Parameters

| Name | Type   | Description                  |
| :--- | :----- | :--------------------------- |
| id   | string | **Required**. Id of the story |

### Response

```json
{
  "id": "5f9b2b2b2b2b2r6r6r6r6r6",
    "ownerId": "ds9fs9awe0affg7sg6s",
    "filePath": "www.my2drive.com",
  "deleteDate": "2023-06-02T17:21:08.361+00:00"
    }
```