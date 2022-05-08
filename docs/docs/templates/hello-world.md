---
sidebar_label: "hello-world"
sidebar_position: 3
---
# `hello-world`

A template to quick start an express server without any specific functionality in mind ([explore the code](https://github.com/Walrussuit101/create-express-app/tree/master/templates/hello-world))

## Quick Start
```bash
npx @walrussuit/cea my-project hello-world --git
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
This will re-start the server (using [nodemon](https://nodemon.io/)) on changes to any TypeScript or JSON file (hot-reloading)

## Web Server
The web server's routes are registered in the `./src/index.ts` file.

### GET /
Returns a string containing `Hello World`
