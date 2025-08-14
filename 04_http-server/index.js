const http = require('http');
const fs=require('fs');
const url=require("url");

const myServer = http.createServer((req, res)=> {
   if(req.url === "/favicon.ico") return res.end();
   const log=`${Date.now()}: ${req.url} New Req Received \n`;
   const myUrl= url.parse(req.url, true);
   console.log(myUrl);
   fs.appendFile("log.txt",log, (err, data)=>{
      switch(myUrl.pathname){
         case '/': res.end("HomePage");
         break;

         case '/about':
            const username=myUrl.query.name;
            const roll=myUrl.query.roll;
             res.end(`Hi, ${username},${roll}`);
         break;

         default: res.end("404 Not Found");
         break;

      }
   });
    
}) ;

myServer.listen(8000, () =>console.log("Server is running on port 8000"));