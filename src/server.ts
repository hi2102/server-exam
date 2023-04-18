import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
// import { RequestHandler } from "express";
// export const 메서드: RequestHandler = (req, res, next) => {};

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
	console.log(`${req.method} ${req.path}`);
	next();
}

const express = require('express');
const app = express();
const PORT = 4000;

app.use(loggerMiddleware);
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
	res.send(req.body);
});

// POST method route
app.post('/', function (req: Request, res: Response) {
	res.send('POST request to the homepage');
});

app.listen(PORT, () => {
	console.log(`app listening on ${PORT}`);
});
