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


// function myHandler(req, res){
// const myServer = http.createServer((req, res)=> {
//     if(req.url ==="/favicon.ico") return res.end()
//     const log=`${Date.now()}: ${req.url} New Req Received \n`
//     const myUrl = url.parse(req.url,true)
//     // console.log(myUrl)

//     fs.appendFile("log.txt", log,(err,data)=>{
//         switch(myUrl.pathname){
//             case '/':res.end("Homepage")
//             break;

//             case '/about':
//                 const userName = myUrl.query.myNAme
//                 res.end(`Hi, ${userName}, Welcome to the About page`)
//             break;

//             case '/search':
//                 const searchQuery = myUrl.query.search_query
//                 res.end("Search results for: " + searchQuery)
//             break;
//             case '/signup':
//                 if(req.method === 'GET') res.end('This is a signup form')
//                 else if(req.method === 'POST'){
//                     // DB Query
//                     res.end('Success')    
//                 }

//             default: res.end("404 Not Found")
//         }
//         // res.end("Hello from the server Again")
//     })
//     // console.log(req.headers)
    
// }) 
// }

// const myServer = http.createServer(app)   

// myServer.listen(8002, () =>console.log("Server is running on port 8002"))