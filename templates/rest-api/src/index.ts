import express from 'express';
import nocache from 'nocache';
import morgan from 'mogran';
import cors from 'cors';
import rootDisplay from './root.display';
import routes from './routes/index.route';

const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(nocache());

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(routes);

// default response in the event of an error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({msg : "Oops! Something went wrong :("});
});

// display available routes if dev/test env
if (process.env.NODE_ENV !== 'production') {
    app.get('/', (req: Request, res: Response) => {
        res.send(rootDisplay(listEndpoints(app)));
    });
}

// only listen for connections when not test env
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`API Running @ => http://localhost:${port}`);
    });
}