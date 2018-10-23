const config = require('./secret');
const mongoose = require('mongoose');


module.exports = () => {
   const db = mongoose.connect(config.database, { useMongoClient: true }, function(err) {
        if (err) console.log(err);
        console.log("connected to the database");
    });

   return db;
}