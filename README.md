# 📖 Minimalist Book Manager API

- [Description](#description)
- [Installation](#installation)
- [usage](#usage)
- [Unit Tests](#unit-tests)
- [Technologies Used](#technologies-used)
- [Contribute](#contribute)

## Description

This project builds on the [Minimalist Book Manager API](https://github.com/Beanalini/lm-code-book-manager-api-ts) to connect with a PostgreSQL database, add an endpoint that filters books by publisher and includes additional testing and exception handling.

## Installation

After forking and cloning this repo, follow the instructions below to install the application:

Install dependencies:

           npm i

Include a .env database configuration file in the root directory with the following settings:

```
NODE_ENV=dev
PORT=<3000>
DB_NAME=bookshop
DB_USERNAME=<postgres username>
DB_PASSWORD=<postgres password>
DB_HOST=<localhost or 127.0.0.1>
DB_PORT=5432
DB_DIALECT=postgres
```

To use a postgresSQL database:

         set NODE_ENV=dev

To use sqlite in-memory database:

         set NODE_ENV=test

To run application tests:

            npm test

To run the application:

            npm start

## Usage

### Running the application

In order to start the application, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm start

```

### Testing API Endpoints

You can test the API routes and perform CRUD operations using an API REST tool such as Insomnia or Postman.

Available Book API routes to test are:

| method | Route                               | Description             |
| ------ | ----------------------------------- | ----------------------- |
| Get    | /api/v1/books                       | Get all books           |
| Get    | /api/v1/books/{bookId}              | Get a single book by id |
| Get    | /api/v1/books/publisher/{publisher} | Get books by publisher  |
| Post   | /api/v1/books                       | Add a new book          |
| Put    | /api/v1/books/{bookId}              | Update a book by id     |
| Delete | /api/v1/books/{userId}              | Remove a book by id     |

## Unit Tests

In order to run the Jest unit tests, firstly install the dependencies (if you haven't already done so)

```
npm install
```

Followed by:

```
npm test
```

## Technologies Used

### Pre-Requisites

- NodeJS installed (v18.12.1 Long Term Support version at time of writing)

### Technologies & Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [ExpressJS](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite3](https://www.npmjs.com/package/sqlite3)
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [ESLint](https://eslint.org/)
- [pg](https://www.npmjs.com/package/sqlite3)
- [pg-hstore](https://www.npmjs.com/pg-hstore)
- [supertest](https://www.npmjs.com/supertest)
- [dotenv](https://www.npmjs.com/dotenv)

## Questions

If you have any questions regarding this project or contents of this repository, please contact me via:

- email: dat826@gmail.com
- GitHub: [Beanalini](https://github.com/Beanalini)

## Contribute

If you would like to contribute to this project you can contact me by email at dat826@gmail.com or through my GitHub account @[Beanalini](https://github.com/Beanalini).
