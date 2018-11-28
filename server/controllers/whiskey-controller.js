const Whiskey = require('../models/whiskey-model');

// This function grabs the mongoose model and connection, searches for all documents,
// and returns them to the client
function getData(req, res) {
  Whiskey.find({}, (err, doc) => {
    res.send(doc);
  })
    .catch((err) => {
      res.send(418, err);
    });
}

// This function grabs the mongoose model and connection, posts a new document,
// and returns it to the client
function postData(req, res) {

  // Creating a new whiskey object using the schema
  const newWhiskey = new Whiskey({
    distilleryName: req.body.distilleryName,
    whiskeyName: req.body.whiskeyName,
    note: req.body.note,
    rating: req.body.rating,
    country: req.body.country,
    region: req.body.region,
  });

  // Saving the new whiskey object to the database
  newWhiskey.save()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(418, err);
    });
}

module.exports = { getData, postData };
