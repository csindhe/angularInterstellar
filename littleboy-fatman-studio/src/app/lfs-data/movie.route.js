const express = require('express');
const app = express();
const movieRoutes = express.Router();

let movies = require('./movie');

movieRoutes.route('/').get(function(req, res) {
    movies.find({"tomatoes.fresh": {$gt: 60} }, function(err, movies) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(movies);
        }
    });
});

module.exports = movieRoutes;