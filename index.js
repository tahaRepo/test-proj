const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const mysql = require('mysql');
const { urlencoded } = require('body-parser');

const db = mysql.createPool({
    host: "localhost",
    username:"root",
    password:"root",
    database:"testProject",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser,urlencoded({ extended: true }));


app.post("/api/insert", (req,res)=>{
    const sqlInsert = "INSERT INTO payment (transactionID,dateTime,CNIC,amount,email,Address,BankID,MobileNumber) VALUES (?,?,?,?,?,?,?,?)"
    db.query(sqlInsert, {transactionID,dateTime,CNIC,amount,email,Address,BankID,MobileNumber}, (err,result)=>{

    })
})

app.listen(3001, ()=>{
    console.log("running on 3001");
})