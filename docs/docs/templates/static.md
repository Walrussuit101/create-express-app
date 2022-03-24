---
sidebar_label: "static"
sidebar_position: 1
---
# `static`

A web server that serves HTML, CSS, and a bundled JS file

## Quick Start
```bash
npx @walrussuit/create-express-app my-project static --git
cd my-project
npm start
```

## Scripts
These are defined in `./package.json`

### start
```bash
npm start
```
Compiles the client TypeScript code (using [webpack](https://webpack.js.org/)) and starts the web server on localhost at port 8080 (unless you provide a `PORT` environment variable)

### dev
```bash
npm run dev
```
Re-compiles the client code / restarts the server (using [nodemon](https://nodemon.io/)) on changes to any TypeScript, HTML, JSON, or CSS files (hot-reloading)

### compile:client
```bash
npm run compile:client
```
Compiles the client TypeScript code (and it's dependencies) in the `./src/client` directory and outputs it to a bundle JavaScript file in the `./src/client/dist` directory for the web server to serve.

### compile:client:stats
```bash
npm run compile:client:stats
```
Does the same as the above script, but will output statistics of the resulting JavaScript bundle (size, etc).

## Web Server
The web server's routes are registered in the `./src/server.ts` file

### GET /
Returns the HTML file in the `./src/client` directory. This file will make requests for the subsequent CSS/JavaScript files

### GET /index.css
Returns the CSS file in the `./src/client` directory.

### GET /bundle.js
Returns the compiled, bundled, client TypeScript file from the `./src/client/dist` directory.