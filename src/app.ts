import * as express from "express";
import routes from './routes';

const app = express();
app.use('/', routes);

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send("Internal Server Error");
});

export default app;