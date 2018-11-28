const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const eventCtrl = require('./controllers/whiskey-controller');

// Do I need both?
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Send get requests to '/' to eventCtrl.getData
app.get('/', eventCtrl.getData);

// Send post requests to '/' to eventCtrl.postData
app.post('/add', eventCtrl.postData);

app.listen(port, () => console.log(`Server listening on port ${port}...`));
