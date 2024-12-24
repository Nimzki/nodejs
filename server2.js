var http=require('http')

var a=20
var b=30
http.createServer ((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'})
    res.write("A value is"+a)
    res.write("<br>B value is"+b)
    res.write(`<br/>sum is ${a+b}`)
}).listen(4001)

console.log("Server is started on http://127.0.0.1:4001")
