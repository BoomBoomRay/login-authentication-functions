const functions = require('firebase-functions');
const app = require('express')();

const { signUp, logIn } = require('./handlers/users');
app.post('/signup', signUp);
app.post('/login', logIn);

exports.api = functions.region('us-central').https.onRequest(app);
