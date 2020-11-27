const mongoClinet = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017";

let mongodb;

function connect(myCollection = 'laravel') {
    mongoClinet.connect(url, { useUnifiedTopology: true }, (err, db) => {
        if (err) throw err;

       return mongodb = db.db(myCollection);
        // callback();
    });
}

function get() {
    return mongodb;
}

function close() {
    mongodb.close();
}

module.exports = { connect, get, close };