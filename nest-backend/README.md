<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Resources
Nice [Guide](https://medium.com/@gausmann.simon/nestjs-typeorm-and-postgresql-full-example-development-and-project-setup-working-with-database-c1a2b1b11b8f) to NestJS TypeORM and PostgreSQL

## Installation

```bash
$ npm install
```

## Start db (using docker)

```bash
$ npm run start:dev:db
```

## Migrate DB

```bash
# applies migrations
$ npm run typeorm:migration:run
```

```bash
# generates migrations file in src/migrations
$ npm run typeorm:migration:generate -- migration_name
# WARNING: run migration at least once before creating a new migration file
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
