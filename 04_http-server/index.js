const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res)=> {
    const log=`${Date.now()}: ${req.url} New Req Received \n`
    fs.appendFile("log.txt", log,(err,data)=>{
        switch(req.url){
            case '/':res.end("Homepage")
            break;

            case '/about':res.end("About page")
            break;

            default: res.end("404 Not Found")
        }
        // res.end("Hello from the server Again")
    })
    // console.log(req.headers)
    
}) 

myServer.listen(8000, () =>console.log("Server is running on port 8000"))