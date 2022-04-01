const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose')
const Web3 = require("web3");
const web3 = new Web3("https://ropsten.infura.io/v3/1679001d1bb04d6fb6a4b0ed4590b846");
const app = express()
app.use(express.json());
const controller = require('./controller/controller');
const transactionlist = require('./model/transaction');
const cron = require('node-cron');
const bodyParser = require('body-parser');
const port = 8000

app.post('/transaction',controller.transaction);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})