import express, { Response } from 'express';

const server = express();
const port = process.env.PORT || 8080;

server.get("/", (_, res: Response) => {
    res.send("Hello World");
});

server.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`);
});
