const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const eventCtrl = require('./controllers/whiskey-controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, '../dist')));

// Send get requests to '/get' to eventCtrl.getData
app.get('/get', eventCtrl.getData);

// Send post requests to '/add' to eventCtrl.postData
app.post('/add', eventCtrl.postData);

// Send delete requests to '/delete' to eventCtrl.deleteData
app.delete('/delete/:name', eventCtrl.deleteData);

app.listen(port, () => console.log(`Server listening on port ${port}...`));
