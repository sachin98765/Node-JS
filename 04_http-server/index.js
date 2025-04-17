const http = require('http');
const fs = require('fs');
const url =require('url')

const myServer = http.createServer((req, res)=> {
    if(req.url ==="/favicon.ico") return res.end()
    const log=`${Date.now()}: ${req.url} New Req Received \n`
    const myUrl = url.parse(req.url,true)
    console.log(myUrl)
    fs.appendFile("log.txt", log,(err,data)=>{
        switch(myUrl.pathname){
            case '/':res.end("Homepage")
            break;

            case '/about':
                const userName = myUrl.query.myNAme
                res.end(`Hi, ${userName}, Welcome to the About page`)
            break;

            case '/search':
                const searchQuery = myUrl.query.search_query
                res.end("Search results for: " + searchQuery)
            break;

            default: res.end("404 Not Found")
        }
        // res.end("Hello from the server Again")
    })
    // console.log(req.headers)
    
}) 

myServer.listen(8000, () =>console.log("Server is running on port 8000"))