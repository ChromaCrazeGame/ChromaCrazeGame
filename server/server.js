const path = require('path');
const express = require('express');

const PORT = 3000;
const app = express();

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`))

app.use(express.json())
app.use(express.urlencoded())

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
})

app.use((req, res) => res.sendStatus(404).send('Page Not Found'));

app.use((err, req, res, next) => {
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