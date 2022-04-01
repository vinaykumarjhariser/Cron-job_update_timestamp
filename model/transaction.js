const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CronJob', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(function () {
    console.log("Connection connected Successfully");
}).catch(function () {
    console.log("Connection Fail");
})
//Schema
const CronjobSchema = new mongoose.Schema({
    transaction_from: {
        type: String,
        required:true   
    },
    transaction_to:{
        type:String,
        required:true   

    },
    value:{
        type:String,
        required:true   
    }

});
//Model
const transactionlist = mongoose.model('transactionlist', CronjobSchema);
module.exports =transactionlist

