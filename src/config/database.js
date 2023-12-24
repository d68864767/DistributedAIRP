const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const dbConnectionURL = {
  'LOCALURL': `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`
};

mongoose.connect(dbConnectionURL.LOCALURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to database');
}).catch((error) => {
  console.error(`Error connecting to the database. \n${error}`);
});

module.exports = mongoose;
