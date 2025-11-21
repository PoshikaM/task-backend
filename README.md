# Task Manager Backend API

## Overview

This is the backend API for a simple Task Management application. It provides RESTful endpoints to create, read, update, and delete tasks.

---

## Technologies Used

- **Node.js** with **Express.js** for building the REST API.
- **PostgreSQL** as the database.
- **Sequelize ORM** to interact with PostgreSQL.
- **Neon** - Hosted PostgreSQL cloud database service used for production database.
- **Jest** and **Supertest** for unit and integration testing.
- **dotenv** for environment variable management.
- **cors** to enable Cross-Origin Resource Sharing.

---

## Features

- **CRUD operations** for tasks:
  - Create a task with a title and optional description.
  - Read all tasks.
  - Update task status (toggle between completed and incomplete).
  - Delete tasks.
- Tasks have the following fields:
  - `id` (auto-generated)
  - `title` (string, required)
  - `description` (string, optional)
  - `status` (boolean, default: false)
  - `createdAt` (timestamp)
- Proper error handling with relevant HTTP status codes.
- Integration tests covering all API endpoints.

---

## Setup & Run Locally

### Prerequisites

- Node.js (v16 or above)
- PostgreSQL database (local or hosted on [Neon](https://neon.tech/))
- npm (Node package manager)

### Steps

1. **Clone the repo**

   ```bash
   git clone <your-repo-url>
   cd task-backend
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Configure environment variables**

    Create a .env file in the project root and add:

    ```bash
    DATABASE_URL=your_neon_database_connection_string
    PORT=5000
    ```
    
    Replace your_neon_database_connection_string with your Neon PostgreSQL connection URI.

4. **Run the server**

    ```bash
    npm run dev
    ```

5. **Test API endpoints**

    Use tools like Postman or curl to interact with endpoints at:

    ```bash
    GET /tasks

    POST /tasks

    PATCH /tasks/:id

    DELETE /tasks/:id
    ```

### Running Tests

The project includes integration tests using Jest and Supertest.

To run tests:

```bash
npm test
```

### Deployment

- The app can be deployed on any Node.js hosting platform.

- Use the Neon database for production as a fully managed cloud PostgreSQL service.

- Ensure environment variables are set properly on the deployment environment.

## Backend Deployed Link

The backend API is deployed and accessible here:

[Task Manager Backend API](https://task-backend-gfbf.onrender.com/)