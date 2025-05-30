# <div align="center">🚀 NestJS + GraphQL + MongoDB Starter</div>

<div align="center">
  <p>A professional, scalable boilerplate for building GraphQL APIs with NestJS and MongoDB</p>
  
  ![NestJS](https://img.shields.io/badge/NestJS-v10-red.svg)
  ![GraphQL](https://img.shields.io/badge/GraphQL-v16-pink.svg)
  ![MongoDB](https://img.shields.io/badge/MongoDB-latest-green.svg)
</div>

## ✨ Features

- 🔥 [NestJS](https://nestjs.com/) - A progressive Node.js framework
- ⚡️ [GraphQL](https://graphql.org/) with [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Code-first approach
- 📦 [MongoDB](https://www.mongodb.com/) integration with [Mongoose](https://mongoosejs.com/)
- 🧩 Modular architecture
- 📏 ESLint + Prettier for consistent code style
- 🚦 Class Validator for DTO validation

## 📚 Tech Stack

<p>
  <img src="https://nestjs.com/img/logo-small.svg" height="50" alt="NestJS" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png" height="50" alt="GraphQL" />
  <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" height="50" alt="MongoDB" />
  <img src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" height="40" alt="Mongoose" />
  <img src="https://jwt.io/img/pic_logo.svg" height="40" alt="JWT" />
  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" height="50" alt="Node.js" />
  <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" height="50" alt="TypeScript" />
</p>

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- MongoDB (local or Atlas connection)
- Yarn or NPM

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Ridho894/nestjs-graphql-mongo-starter.git
cd nestjs-graphql-mongo-starter
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Environment Setup**

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=3000

# MongoDB
MONGO_URI=mongodb://localhost:27017/nestjs-gql-mongo

# JWT
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES=1d
```

4. **Start the development server**

```bash
npm run start:dev
# or
yarn start:dev
```

Your GraphQL API will be available at `http://localhost:3000/graphql`

## 🧰 Development Commands

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `npm run build`       | Builds the application               |
| `npm start`           | Starts the application               |
| `npm run start:dev`   | Starts the application in watch mode |
| `npm run start:debug` | Starts with debugging                |
| `npm run start:prod`  | Starts in production mode            |
| `npm run lint`        | Lints the code                       |
| `npm run test`        | Runs tests                           |
| `npm run test:watch`  | Runs tests in watch mode             |
| `npm run test:cov`    | Shows test coverage                  |

## 🏗️ Project Structure

```
nestjs-gql-mongo-starter/
├── src/
│   ├── config/            # Configuration files and constants
│   ├── graphql/           # GraphQL specific files
│   ├── modules/           # Feature modules
│   │   └── users/         # User module example
│   │       ├── dto/       # Data Transfer Objects
│   │       ├── schemas/   # Mongoose schemas
│   │       ├── users.module.ts
│   │       ├── users.resolver.ts
│   │       └── users.service.ts
│   ├── app.module.ts      # Main application module
│   └── main.ts           # Application entry point
├── test/                  # Testing utilities
├── .env                   # Environment variables (create this)
├── .gitignore             # Git ignore file
├── nest-cli.json          # NestJS CLI configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Documentation
```

## 💻 Features Implementation

- **GraphQL API**
  - Code-first approach using decorators
  - Schema auto-generation
  - Resolvers for queries and mutations
- **Database**
  - MongoDB integration with Mongoose
  - Repository pattern
- **Validation**
  - Input validation with class-validator

## 🔍 GraphQL Playground

Once the application is running, you can access the GraphQL Playground at:

```
http://localhost:3000/graphql
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👏 Acknowledgments

- [NestJS Documentation](https://docs.nestjs.com/)
- [GraphQL Documentation](https://graphql.org/learn/)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
