# Authentication Endpoints

How it works?

1. Request a magic link
2. Login with magic link

In development mode ther will not be any email sent, but you can see the magic link in the console and it will be saved in cookies so you don't need to paste any token.

## Request a magic link

`POST /api/auth/link`

### Body

```json
{
  "email": "example@example.com"
}
```

### Response

> 200 OK

_In dev_

```json
{
  "token": "..."
}
```

## Login with magic link

`GET /api/auth/login`

### Parameters

| Name  | Type   | Description                    |
| :---- | :----- | :----------------------------- |
| token | string | **Required**. Magic link token |

### Response

> 200 OK

## Logout

`DELETE /api/auth/logout`

### Response

> 200 OK
