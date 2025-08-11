const http = require('http');
const fs = require('fs');
const url =require('url')
const express = require('express')

const app = express();

app.get('/', (req, res) =>{
    return res.send('Hello from home page')
})

app.get('/about', (req, res) =>{
    return res.send('Hello from about page'+" hey "+req.query.name+" my age "+req.query.age)
})

app.listen(8002, () =>console.log("Server is running on port 8002"))
