const mongoose = require("mongoose");

const MongoURI = "mongodb+srv://AkshayGaikwad:Akshay143@cluster0.ii90wme.mongodb.net/popcorn";

const connect = () => {
  mongoose.connect(MongoURI, () => {
    console.log("Connected to mongo successfully");
  });
};

if (!connect) {
  console.log("Not connected to mongo");
}

module.exports = connect;
