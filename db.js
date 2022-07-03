const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017"

const connetToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connect to mongodb compass successfully");
    })
}

module.exports = connetToMongo;