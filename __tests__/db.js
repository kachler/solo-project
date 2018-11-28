const mongoose = require('mongoose');
require('dotenv').config();
const Whiskey = require('../server/models/whiskey-model');

let connection;
let db;

const testMessage = new Whiskey({
  distilleryName: 'Makers Mark',
  whiskeyName: 'Bourbon',
  note: 'Sweet, caramel flavor',
  rating: 2,
  country: 'USA',
  region: 'Kentucky',
});

describe('db unit tests', () => {
  beforeAll(async () => {
    connection = await mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
    db = await connection.db(process.env.DB_CONNECT);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  describe('#sync', () => {
    it('writes a valid whiskey to the databse', () => {
      const result = testMessage.save()
      console.log(result);
      expect(result).toEqual(testMessage);
    });
  });
});
