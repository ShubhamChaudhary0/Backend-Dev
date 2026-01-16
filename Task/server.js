const http= require("http");
const fs= require("fs");
const myserver= http.createServer((req,res)=>{
   // console.log("new req rec.");
    //console.log(req.headers);
    //console.log(req);
    const log=`${Date.now()} \n`;
    fs.appendFile("log.txt",log,(err , data)=>{
     // 5 switch case
     switch(req.url){
        case '/':
            res.end('home page');
            break;
        case '/about':
            res.end('about page');
            break;
        case '/contact':
            res.end('contact page');
            break;
        default:
            res.end('404 page not found');
            break;
     }           
    })


    res.end("hello from server");
});
myserver.listen (3000,()=> console.log("server started"));