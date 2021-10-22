# Documentação

## Iniciar Software


1. `npm install`
2. `npm start`


## API Usuários

Modelo:
```
id: Number
name: String
email: String
password: String
token: String
```

### GET /users
```
{
    "code": 200,
    "message": "success",
    "data": [
        {
            "id": 1,
            "name": "admin",
            "email": "admin@example.com",
            "password": "a66abb5684c45962d887564f08346e8d",
            "token": null
        }
    ]
}
```

### GET /users/:id
```
{
    "code": 200,
    "message": "success",
    "data": {
        "id": 1,
        "name": "admin",
        "email": "admin@example.com",
        "password": "a66abb5684c45962d887564f08346e8d",
        "token": null
    }
}
```

### POST /users
Body:
```
{
    "name": "admin",
    "email": "admin@example.com",
    "password": "admin123456",
}
```

Output:
```
{
    "id": 1,
    "name": "admin",
    "email": "admin@example.com",
    "password": "a66abb5684c45962d887564f08346e8d",
    "token": null
}
```

### PUT /users/:id
Body:
```
{
    "name": "admin",
    "email": "admin@example.com",
    "password": "admin123456"
}
```

Output:
```
{
    "id": 1,
    "name": "admin",
    "email": "admin@example.com",
    "password": "a66abb5684c45962d887564f08346e8d",
    "token": null
}
```

### DELETE /users/:id
```
{
    "message": "deleted."
}
```


## API Categorias

Modelo:
```
name: String
```

### GET /categories
```
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": 1,
      "name": "Bebida"
    }
  ]
}
```

### GET /categories/:id
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Bebida"
    }
}
```

### POST /categories
Body:
```
{
    "name": "Bebida"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Bebida"
    }
}
```

### PUT /categories/:id
Body:
```
{
    "name": "Bebida"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "Bebida"
    }
}
```

### DELETE /categories/:id
```
{
    "message": "deleted."
}
```

## API Produtos

Modelo:
```
id: Number
name: String
price: Number
category_id: Number
```

### GET /products
```
{
  "code": 200,
  "message": "success",
  "data": [
    {
        "id": 1,
        "name": "energetico",
        "price": "8.60",
        "category_id": "1"
    }
  ]
}
```

### GET /products/:id
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "energetico",
        "price": "8.60",
        "category_id": "1"
    }
}
```

### POST /products
Body:
```
{
    "name": "energetico",
    "price": "8.60",
    "category_id": "1"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "energetico",
        "price": "8.60",
        "category_id": "1"
    }
}
```

### PUT /products/:id
Body:
```
{
    "name": "energetico",
    "price": "8.60",
    "category_id": "1"
}
```

Output:
```
{
  "code": 200,
  "message": "success",
  "data": {
        "id": 1,
        "name": "energetico",
        "price": "8.60",
        "category_id": "1"
    }
}
```

### DELETE /products/:id
```
{
    "message": "deleted"
}
```