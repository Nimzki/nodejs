var http=require('http')

http.createServer((req,res)=>{
    res.end("<h1>Hello world hiii </h1>")
}).listen(5000)

console.log("Server is started on http://127.0.0.1:5000")