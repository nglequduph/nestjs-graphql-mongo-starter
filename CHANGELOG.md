# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial features and improvements.

#### 🔐 Security & Stability

- Helmet integration. Added NestJS Helmet to enhance HTTP headers security.
- Healthcheck endpoint. Added a `/health` endpoint to monitor server and database status, useful for uptime checks and monitoring.
- Role-based rate limiting. Implemented rate limiting with different rules per role (e.g., stricter limits on login endpoints, more relaxed for public APIs).

### Changed

-

## [0.1.0] - 2025-05-30

### Added

- Initial project structure and setup
- GraphQL server with code-first approach
- MongoDB integration with Mongoose
- User module with basic Read operations
- ESLint and Prettier configuration
- Conventional Commits setup with Husky and commitlint
- Comprehensive README with setup instructions

[Unreleased]: https://github.com/Ridho894/nestjs-graphql-mongo-starter/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Ridho894/nestjs-graphql-mongo-starter/releases/tag/v0.1.0
