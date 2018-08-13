const Mongoose = require('mongoose');
// //load database
// Mongoose.connect('mongodb://localhost/hapijs-mongoose/');
// var db = Mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error'));
// db.once('open', function callback() {
//     console.log('Connection with database succeeded.');
// });
// exports.db = db;
Mongoose.connect('mongodb://localhost/hapijs-mongoose/');
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('Connection with database succeeded.');
});

exports.db = db;