

# Documentação da API

## Autenticação

#### Registro

```http
  POST /auth/register
```

```bash
  curl -X POST http://auth/register -d '{"email": "usuario@example.com", "password": "senha123", "confirmPassword": "senha123"}'
```

| Corpo   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email do usuário |
| `password` | `string` | **Obrigatório**. Senha do usuário |
| `confirmPassword` | `string` | **Obrigatório**. Confirmação de senha |

---

#### Entrar 

```http
  POST /auth/login
```

```bash
  curl -X POST http://auth/login -d '{"email": "usuario@example.com", "password": "senha123"}'
```

| Corpo   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email do usuário |
| `password`      | `string` | **Obrigatório**. Senha do usuário |

---

#### Sair

```http
  GET /auth/logout
```

``` bash
  curl -v http://auth/logout
```
---

#### Atualizar Token de Acesso

```http
  GET /auth/refresh
```

``` bash
  curl -v http://auth/refresh
```

---

#### Verificar email

```http
  GET /auth/email/verify/${code}
```

``` bash
  curl -v http://auth/email/verify/${code}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `code`      | `string` | **Obrigatório**. Codigo recebido ao se registrar para confirmar email |

---

#### Esqueceu Senha

```http
  POST /auth/password/forgot
```

``` bash
  curl -X POST http://auth/password/forgot -d '{"email": "usuario@example.com"}'
```

| Corpo   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email do usuário |

---

#### Resetar senha

```http
  POST /auth/password/reset
```

``` bash
  curl -X POST http://auth/password/reset -d '{"verificationCode": "codigo123", "password": "novaSenha123"}'
```

| Corpo   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `verificationCode` | `string` | **Obrigatório**. Código recebido ao abrir o email de reset |
| `password` | `string` | **Obrigatório**. Nova senha |

---

## Sessão

#### Listar sessões

```http
  GET /session
```

``` bash
  curl -v http://session
```
---

#### Deletar sessão

```http
  GET /session/${id}
```

``` bash
  curl -v http://session/{id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. Id da sessão |

---

> TODO: adicionar os endpoints
