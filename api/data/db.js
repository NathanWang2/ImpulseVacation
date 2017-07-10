var mongoose = require("mongoose");
var dburl = "mongodb://username:password@ds151752.mlab.com:51752/vacationdb";

mongoose.connect(dburl, {
  useMongoClient: true,
    /* other options */
  });

mongoose.connection.on("connected", function(){
    console.log("Mongoose connected to " + dburl);
});
mongoose.connection.on("disconnected", function(){
    console.log("Disconnected");
});
mongoose.connection.on("error", function(err){
    console.log("Mongoose error: " + err);
});

// For Unix based systems
process.on('SIGNINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected through app termination (SIGNINT)");
        process.exit(0);
    });
});

process.on('SIGNTERM', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected through app termination (SIGNINT)");
        process.exit(0);
    });
});

process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected through app termination (SIGNINT)");
        process.kill(process.pid, 'SIGUSR2');
    });
});
// End Unix based systems


// Bring in Schema as a model
require('./user-model.js');
