const mongoose = require('mongoose');
const schema = mongoose.Schema;

let comments = new schema({
    _id: {type: Object},
    name: {type: String},
    email: {type: String},
    movie_id: {type: Object},
    text: {type: String},
    date: {type: Date}
},{
    collection: 'comments'
});

let movies = new schema({
    _id: {type: Object},
    plot: {type: String},
    genres: {type: [String]},
    runtime: {type: Number},
    cast: {type: [String]},
    num_mflix_comments: {type: Number},
    poster: {type: String},
    title: {type: String},
    fullplot: {type: String},
    languages: {type: [String]},
    released: {type: Date},
    directors: {type: [String]},
    rated: {type: String},
    awards: {
        wins: {type: Number},
        nominations: {type: Number},
        text: {type: String}
    },
    lastupdated: {type: Date},
    year: {type: Number},
    imdb: {
        rating: {type: Number},
        votes: {type: Number},
        id: {type: Number}
    },
    countries: {type: [String]},
    type: {type: String},
    tomatoes: {
        viewer: {
            rating: {type: Number},
            numReviews: {type: Number},
            meter: {type: Number}
        },
        fresh: {type: Number},
        critic: {
            rating: {type: Number},
            numReviews: {type: Number},
            meter: {type: Number}
        },
        rotten: {type: Number},
        lastupdated: {type: Date}
    }
}, {
    collection: 'movies'
});

module.exports = mongoose.model('movies', movies);