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
        type: String,
        // required:true
    },
    lastName:{
        type:String,
        // require:true
    },
    age:{
        type:Number,
        // required:true
    },
    rollNo:{
        type:String,
        // required:true
    }},
   { timestamps: true })

//Model
const Cronjob = mongoose.model('Cronjob', CronjobSchema);
module.exports = Cronjob;