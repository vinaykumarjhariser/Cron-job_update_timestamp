const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose')
const Web3 = require("web3");
const web3 = new Web3("https://ropsten.infura.io/v3/1679001d1bb04d6fb6a4b0ed4590b846");
const app = express()
app.use(express.json());

exports.timestamp = async(req,res)=>{
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
        })
    
    })
    
    
    }

exports.transaction =  (req, res) => {
    cron.schedule('*/30 * * * *', () => {
            const transaction_from = req.body.transaction_from;
            const transaction_to = req.body.transaction_to;
            const value = req.body.value;

            async function eth_transaction() {
                const Value = web3.utils.toWei(req.body.value, 'ether')
                const SignedTransaction = await web3.eth.accounts.signTransaction({
                    to: transaction_to, //process.env.to_address,
                    value: Value,
                    gas: 2000000,
                    nonce: web3.eth.getTransactionCount(transaction_from)
                }, process.env.Private_Key);

                web3.eth.sendSignedTransaction(SignedTransaction.rawTransaction).then((receipt) => {
                    res.json(receipt)
                    const deatils = new transactionlist({
                        transaction_from: transaction_from,
                        transaction_to: transaction_to,
                        value: value
                    })
                    deatils.save()
                })


            }
            eth_transaction();
        
    })

}