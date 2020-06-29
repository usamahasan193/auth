const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
var mongooseOptions = { useNewUrlParser: true };

mongoose.connect(
  "mongodb://localhost:27017/MyDatabase",
  mongooseOptions,
  function (err) {
    if (err) {
      console.error("System could not connect to mongo server.");
      console.log(err);
    } else {
      console.log("MongoDB Connected...");
    }
  }
);
module.exports = mongoose;
