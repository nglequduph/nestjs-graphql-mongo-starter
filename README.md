# NestJS GraphQL MongoDB Starter 🚀

![GitHub Release](https://img.shields.io/github/release/nglequduph/nestjs-graphql-mongo-starter.svg) ![GitHub Stars](https://img.shields.io/github/stars/nglequduph/nestjs-graphql-mongo-starter.svg) ![GitHub Forks](https://img.shields.io/github/forks/nglequduph/nestjs-graphql-mongo-starter.svg)

Welcome to the **NestJS GraphQL MongoDB Starter**! This repository provides a robust template for building scalable backend projects using NestJS, GraphQL, and MongoDB. It is designed for rapid API development, ensuring that you can get your project up and running with minimal effort.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Releases](#releases)

## Features

- **Scalable Architecture**: Built with best practices to support growth.
- **GraphQL Support**: Easy integration with GraphQL for flexible API development.
- **MongoDB Integration**: Seamless connection to MongoDB for data storage.
- **TypeScript**: Strong typing for better code quality and maintainability.
- **Modular Design**: Organize your code into modules for better structure.

## Technologies Used

This starter template incorporates the following technologies:

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **GraphQL**: A query language for your API, allowing clients to request only the data they need.
- **MongoDB**: A NoSQL database that uses a document-oriented data model.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/nglequduph/nestjs-graphql-mongo-starter.git
cd nestjs-graphql-mongo-starter
npm install
```

Make sure you have the following prerequisites installed:

- Node.js (v14 or later)
- MongoDB (locally or via a cloud provider)

### Environment Variables

Create a `.env` file in the root directory and set the following variables:

```
MONGODB_URI=mongodb://localhost:27017/your_database_name
PORT=3000
```

Replace `your_database_name` with the name of your MongoDB database.

## Project Structure

The project is organized into several directories:

```
nestjs-graphql-mongo-starter/
├── src/
│   ├── modules/
│   │   ├── user/
│   │   │   ├── user.module.ts
│   │   │   ├── user.service.ts
│   │   │   ├── user.resolver.ts
│   │   │   └── user.entity.ts
│   │   └── ...
│   ├── app.module.ts
│   ├── main.ts
│   └── ...
├── .env
├── package.json
└── ...
```

- **modules/**: Contains feature modules for the application.
- **app.module.ts**: The root module that imports other modules.
- **main.ts**: The entry point of the application.

## API Documentation

The API is documented using GraphQL. You can explore the API using the GraphQL Playground available at `http://localhost:3000/graphql` after starting the server.

### Example Queries

Here’s an example of how to query for users:

```graphql
query {
  users {
    id
    name
    email
  }
}
```

### Example Mutations

To create a new user, you can use the following mutation:

```graphql
mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}
```

## Running the Application

To run the application, use the following command:

```bash
npm run start:dev
```

This command starts the application in development mode, automatically reloading on file changes.

## Testing

To run the tests, use:

```bash
npm run test
```

This command executes the unit tests defined in the project. Ensure you have a test database set up in your `.env` file.

## Contributing

We welcome contributions to this project. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Releases

For the latest releases and updates, please visit our [Releases page](https://github.com/nglequduph/nestjs-graphql-mongo-starter/releases). You can download the latest version and execute it to get started with your backend project.

For more detailed information on the releases, check the "Releases" section in the repository.

Feel free to explore the code, contribute, and enhance this starter template to fit your needs!