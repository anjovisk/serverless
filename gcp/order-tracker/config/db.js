const mongoose = require('mongoose');

const MONGO_USERNAME = process.env.DB_USER_NAME;
const MONGO_PASSWORD = process.env.DB_USER_PASSWORD;
const MONGO_HOSTNAME = process.env.DB_HOST;
const MONGO_PORT = process.env.DB_PORT;
const MONGO_DB = process.env.DB_NAME;

const url = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`;

//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=app3`;

mongoose.connect(url, {useNewUrlParser: true});