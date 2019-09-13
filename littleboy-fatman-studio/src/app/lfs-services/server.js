const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config = require('./DB');

const movieRoute = require('../lfs-data/movie.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected.') },
    err => { console.log('Can not connect to the database'+ err) }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/getMovies', movieRoute);
let port = process.env.port || 4000;
const server = app.listen(port, '127.0.0.1', function() {
    console.log('Listening to Port ' + port);
});