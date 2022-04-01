const mongoose = require('mongoose');
// Connection 
mongoose.connect('mongodb://localhost:27017/CronJob', {

    useNewUrlParser: true
}).then(function () {
    console.log("Connection connected Successfully");
}).catch(function () {
    console.log("Connection Fail");
})

//Schema
const CronjobSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName:{
        type:String
    },
    age:{
        type:Number
    },
    rollNo:{
        type:String
    }},
   { timestamps: true })

//Model
const Cronjob = mongoose.model('Cronjob', CronjobSchema);
module.exports = Cronjob;