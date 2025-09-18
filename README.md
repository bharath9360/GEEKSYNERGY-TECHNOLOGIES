# Green Signify Backend

A minimal, secure, and production-ready user management backend built with Node.js, Express, and MongoDB.

## Features

-   User Registration (with password encryption)
-   User Login (with JWT authentication)
-   CRUD operations for users (List, Update, Delete)
-   Secure API endpoints
-   Static frontend for interaction

## Tech Stack

-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB with Mongoose
-   **Authentication**: JSON Web Tokens (`jsonwebtoken`)
-   **Security**: `bcryptjs` for password hashing, `helmet` for securing HTTP headers, `cors`
-   **Frontend**: HTML5, Bootstrap 5, Fetch API

---

## Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd green-signify-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file:**
    Copy the contents of `.env.example` into a new file named `.env` and update the variables, especially your `MONGO_URI`.
    ```bash
    cp .env.example .env
    ```

4.  **Run the development server:**
    The server will be accessible at `http://localhost:3000`.
    ```bash
    npm run dev
    ```

---

## API Endpoints

The base path for all API routes is `/api/v1`.

### Authentication

**1. Register a new user**
-   **URL**: `/auth/register`
-   **Method**: `POST`
-   **Body**:
    ```json
    {
      "name": "Jane Doe",
      "email": "jane.doe@example.com",
      "password": "securePassword123",
      "phone": "9876543210",
      "profession": "Developer"
    }
    ```
-   **cURL Example**:
    ```bash
    curl -X POST http://localhost:3000/api/v1/auth/register \
    -H "Content-Type: application/json" \
    -d '{"name":"Jane Doe","email":"jane.doe@example.com","password":"securePassword123","phone":"9876543210","profession":"Developer"}'
    ```

**2. Login a user**
-   **URL**: `/auth/login`
-   **Method**: `POST`
-   **Body**:
    ```json
    {
      "email": "jane.doe@example.com",
      "password": "securePassword123"
    }
    ```
-   **cURL Example**:
    ```bash
    curl -X POST http://localhost:3000/api/v1/auth/login \
    -H "Content-Type: application/json" \
    -d '{"email":"jane.doe@example.com","password":"securePassword123"}'
    ```

### Users (Requires JWT Bearer Token)

*Replace `<TOKEN>` and `<USER_ID>` with actual values.*

**1. Get all users**
-   **URL**: `/users`
-   **Method**: `GET`
-   **cURL Example**:
    ```bash
    curl -X GET http://localhost:3000/api/v1/users \
    -H "Authorization: Bearer <TOKEN>"
    ```

**2. Update a user**
-   **URL**: `/users/<USER_ID>`
-   **Method**: `PUT`
-   **Body**:
    ```json
    {
      "name": "Jane Smith",
      "phone": "1122334455"
    }
    ```
-   **cURL Example**:
    ```bash
    curl -X PUT http://localhost:3000/api/v1/users/<USER_ID> \
    -H "Authorization: Bearer <TOKEN>" \
    -H "Content-Type: application/json" \
    -d '{"name":"Jane Smith","phone":"1122334455"}'
    ```

**3. Delete a user**
-   **URL**: `/users/<USER_ID>`
-   **Method**: `DELETE`
-   **cURL Example**:
    ```bash
    curl -X DELETE http://localhost:3000/api/v1/users/<USER_ID> \
    -H "Authorization: Bearer <TOKEN>"
    ```