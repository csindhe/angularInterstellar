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

module.exports = mongoose.model('comments', comments);