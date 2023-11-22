# 📖 Minimalist Book Manager API

- [Description](#description)
- [Project Requirements](#requirements)
- [Installation](#Installation)
- [usage](#usage)
- [Unit Tests](#tests)
- [Technologies Used](#tecnologies-used)
- [Contribute](#contribute)

## Description

This projects builds upon code provided for a [Minimalist Book Manager API](https://github.com/techreturners/lm-code-book-manager-api-ts) and adds an additional endpoint to delete a book along with exception handling.

## Project Requirements

📘 Implement the following User Story with unit tests.

`User Story: As a user, I want to use the Book Manager API to delete a book using its ID`

📘 Add exception handling to handle a POST request for a book ID that already exists.

📘 Add exception handling to handle a GET request that doesn't exist.

## Installation

After forking and cloning this repo, follow the instructions below to install the application:

Install dependencies:

           npm i

To run application tests:

            npm test

To run the application

            npm start

## Usage

### Running the application

In order to start the application and open the localhost server connection on port 3000, firstly install the dependencies (if you haven't already done so)

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

| method | Route                  | Description             |
| ------ | ---------------------- | ----------------------- |
| Get    | /api/v1/books          | Get all books           |
| Get    | /api/v1/books/{bookId} | Get a single book by id |
| Post   | /api/v1/books          | Add a new book          |
| Put    | /api/v1/books/{bookId} | Update a book by id     |
| Delete | /api/v1/books/{userId} | Remove a book by id     |

### Running the Unit Tests

In order to run the unit tests run, firstly install the dependencies (if you haven't already done so)

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

## Questions

If you have any questions regarding this project or contents of this repository, please contact me via:

- email: dat826@gmail.com
- GitHub: [Beanalini](https://github.com/Beanalini)

## How to Contribute

If you would like to contribute to this project you can contact me by email at dat826@gmail.com or through my GitHub account @[Beanalini](https://github.com/Beanalini).
