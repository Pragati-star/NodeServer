var http = require('http');
var port = process.env.PORT || 8686
var server = http.createServer((req,res)=> {
    res.write("Helllo From NodeJs Server");
    res.end();
})

server.listen(8686)