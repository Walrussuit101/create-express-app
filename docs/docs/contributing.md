---
sidebar_label: "Contributing"
sidebar_position: 6
---
# Contributing
Have a new template? Want to fix a bug? You're more than welcome to fork the repository and open a PR! 😀<br/>
Below are some details on developing in the project.

## Set Up
After forking the repository the project is fairly simple to get running 👍

### Installing
Install deps & setup husky to format code using [prettier](https://prettier.io/) on any code commit:
``` bash
npm install
```

### Running
To run use `npm start` and the arguments as normal:
```bash
npm start my-project static --git
```
> Be aware this will create a `my-project` directory in the repository root

<br/>

To use hot reloading run `npm run dev` and the arguments as normal:
```bash
npm run dev my-project static --git
```
> This will rerun on any code changes and avoid [E002](./errors/E002) by deleting the diretory `my-project` first

### Testing
Run the following to execute tests
```bash
npm test
```

or the following to execute tests and generate a coverage report
```bash
npm run test:coverage
```

### Building
The following script will build a publish ready version of the project via:
1. Running the tests
2. Compiling TS -> JS
3. Running an additional `./src/build.ts` file to copy / modify additional files to `./build` directory
```bash
npm run build
```
> To execute the build version run `node build/src/index.js my-project static --git` or  link the build directory to <br/> be able to run `create-express-app my-project static --git` in any directory on your machine

## Docs
On any page in the docs there is a `Edit this page` link in case you find any issues or think there's a better way to explain things 😀