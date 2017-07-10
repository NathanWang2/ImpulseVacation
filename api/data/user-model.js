var mongoose = require('mongoose');

var activitySchema = new mongoose.Schema({
  type: String
})

var vacationSchema = new mongoose.Schema({
  vacationList:{
    type: String
  },
  listRating:{
    type: Number,
    min: 0,
    max: 10
  },
  activity: [activitySchema],
})

var userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    vacationList: [vacationSchema]
});

// 1st param is name of model
// 2nd param is name of Schema
// 3rd param is name of db in mongodb (Optional)
mongoose.model('User', userSchema);
