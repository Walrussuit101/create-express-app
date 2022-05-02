# create-express-app: hello-world
This project was created using [create-express-app](https://github.com/Walrussuit101/create-express-app). :rocket:
# scripts
```sh
npm start
```
This will start the server on localhost at port 8080 (unless you provide a `PORT` environment variable)
```sh
npm run dev
```
This will re-start the server (using [nodemon](https://nodemon.io/)) on changes to any TypeScript or JSON file (hot-reloading)
# web server
The web server's routes are registered in the `./src/index.ts` file. 
- `GET /`
  - Returns a string containing `Hello World`
