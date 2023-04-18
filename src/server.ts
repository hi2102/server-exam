import * as express from 'express';
import * as bodyParser from 'body-parser';
 
function loggerMiddleware(req: express.Request, res: express.Response, next) {
  console.log(`${req.method} ${req.path}`);
  next();
}

const express = require('express')
const app = express()
const PORT = 4000

app.use(loggerMiddleware)
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send(req.body)
})
app.get('/hello', (req, res) => {
  res.send('hello, world!')
})

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})