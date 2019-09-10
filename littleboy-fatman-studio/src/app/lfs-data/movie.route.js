const express = require('express');
const app = express();
const movieRoutes = express.Router();

let movie = require('./movie');

movieRoutes.route('/').get(function(req, res) {
    movie.find(function(err, movies) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(movies);
        }
    });
});

module.exports = movieRoutes;