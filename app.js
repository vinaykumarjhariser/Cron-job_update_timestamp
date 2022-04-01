const express = require('express');
const mongoose = require('mongoose');
const app = express()
const cron = require('node-cron');
const Cronjob = require('./model/db')
const port = 3000
app.use(express.json());
const controller = require('./controller/controller');

app.post('/cron', controller.timestamp);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})