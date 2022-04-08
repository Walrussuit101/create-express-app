---
sidebar_label: "rest-api"
sidebar_position: 2
---
# `rest-api`

A RESTful API with boilerplate routes to edit an in memory collection of users ([explore the code](https://github.com/Walrussuit101/create-express-app/tree/master/templates/rest-api))

## Quick Start
```bash
npx @walrussuit/create-express-app my-project rest-api --git
cd my-project
npm start
```

## Scripts
These are defined in `./package.json`

### start
```bash
npm start
```
This will start the API on localhost at port 8080 (unless you provide a `PORT` environment variable)

### dev
```bash
npm run dev
```
This will re-start the API (using [nodemon](https://nodemon.io/)) on changes to any TypeScript or JSON file (hot-reloading)

## API Routes
To see all registered routes and their methods go to the root route of the server in a browser ([http://localhost:8080](http://localhost:8080))
>The API routes are registered in the `./src/routes` directory.
