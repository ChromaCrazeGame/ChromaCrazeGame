import path from 'path';
import express, { Response, Request } from 'express';

const PORT = 3000;
const app = express();

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

app.use(express.json());
app.use(express.urlencoded());

// thought by adding a route on the server side, it would clear up the gameboard path, but this renders content from the default path
app.get('/gameboard', (req, res) => {
    return res.status(200);
})

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use((req, res) => res.status(404).send('Page Not Found'));

app.use((err: Error, req: Request, res: Response) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

module.exports = app;
