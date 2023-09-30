const fs = require('fs');
const http = require("http");
var port = 69420;
var response = "";


var allowedFiles;
fs.readFile("./allowedFiles.json", function(err, d){
    allowedFiles = JSON.parse(d)
})


function sendFile(req, res, file){
    fs.readFile("./project/"+file, function(err, d){
        response = d==undefined?"You can not open a directory!":d
        sendRes(req, res)
    })
}

function sendRes(req, res){
    res.writeHead(200)
    res.write(response)
    res.end();
}

http.createServer(function (req, res) {

    if(allowedFiles.files.includes(req.url.split("/")[1])){
        sendFile(req, res, req.url.substring(1))
    }
    else if(req.url == "/"){
        allowedFiles.iLocs.forEach(element => {
            if(allowedFiles.files.includes(element)){
                sendFile(req, res, element)
            }
        });
    }
    else{
        res.writeHead(404)
        res.end();
    }

}).listen(port);

console.log("server is running at http://localhost:"+port)