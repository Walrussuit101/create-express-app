# `create-express-app: static template`
This project was created using create-express-app. :rocket:
# scripts
```sh
npm start
```
This will compile the client TypeScript code (using [webpack](https://webpack.js.org/)) and start the web server on localhost at port 8080 (unless you provide a `PORT` environment varialbe)<br/><br/>
```sh
npm run dev
```
This will re-compile the client code / restart the server (using [nodemon](https://nodemon.io/)) on changes to any TypeScript, HTML, JSON, or CSS files (hot-reloading)<br/><br/> 
```sh
npm run compile:client
```
This will compile the client TypeScript code (and it's dependencies) in the `./src/client` directory and output it to a bundle JavaScript file in the `./src/client/dist` directory for the web server to serve.<br/><br/>
```sh
npm run compile:client:stats
```
This will do the same as the above script, but will output statistics of the resulting JavaScript bundle (size, etc).<br/><br/>
# web server
The web server's routes are registered in the `./src/server.ts` file. 
- `GET /`
  - Returns the HTML file in the `./src/client` directory. This file will make requests for the subsequent CSS/JavaScript files.
- `GET /index.css`
  -  Returns the CSS file in the `./src/client` directory.
- `GET /bundle.js`
  - Returns the compiled, bundled, client TypeScript file from the `./src/client/dist` directory.