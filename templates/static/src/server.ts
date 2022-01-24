import express, { Response } from 'express';
import path from 'path';

const server = express();
const port = process.env.PORT || 8080;

// return the compiled client js file
server.get("/bundle.js", (_, res: Response) => {
	res.sendFile(path.join(__dirname, "client", "bundle.js"));
});

// return the stylesheet
server.get("/index.css", (_, res: Response) => {
	res.sendFile(path.join(__dirname, "client", "index.css"));
});

// return the html file
server.get("/", (_, res: Response) => {
	res.sendFile(path.join(__dirname, "client", "index.html"));
});

server.listen(port, () => {
	console.log(`Listening @ http://localhost:${port}`);
});