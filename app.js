const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cron = require('node-cron');
const Cronjob = require('./model/db')
const port = 3000
app.use(express.json());

// Post method
app.post('/cron', async(req,res)=>{

const list = new Cronjob({
    firstName:"vinay",
    lastName:"jha",
    age: 17,
    rollNo: "1"
})
try {
    const a1 =  list.save();
    // res.json(a1);
    console.log(a1)
} catch (error) {
    console.log(error)
}
cron.schedule('*/30 * * * *', () => {
    Cronjob.updateOne({firstName:"vinay"}, 
        {firstName:"vinay", lastName:"jha", age:17, rollNo:"1"}, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Updated Docs : ", docs);
        }
    });

});


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})