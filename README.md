# Scan to Pay

A Registered Sample Banking app Consumer gets the service from the merchant and now pays for the service as Pay After payment method was selected while booking.

# Project Setup

## Install dependencies

```bash
# for npm
$ npm i

# for yarn
$ yarn
```

## Environment Setup

Run the following command in the root directory to create **.env** file

```bash
touch .env
# put mongo db URI here
echo "DB_URL=<replace_with_database_url>" >> .env
```

An example.env can be found in the root directory

---

# API Documentation

- [Postman API Documentation](https://www.postman.com/galactic-meadow-629470/workspace/scan-to-pay-workspace)

# Important Scripts

```json
{
  "build": "nest build",
  "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
  "start": "nest start",
  "dev": "nest start --watch",
  "prod": "node dist/main",
  "debug": "nest start --debug --watch",
  "test": "jest --watch --coverage", // --coverage tag generates a html-based report in *coverage* directory
  "test:e2e": "jest --config ./test/jest-e2e.json --watch",
  "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"" // format all project files
}
```

# Run

To run the project

```bash
# for npm
$ npm run dev

# for yarn
$ yarn dev
```
