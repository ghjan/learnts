/*
gulp源码解析（一）—— Stream详解
https://www.cnblogs.com/vajoy/p/6349817.html
*/

//demo2
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    
    fs.readFile(__dirname + '/data.txt', function (err, data) {
        res.end(data);
    });
});

server.listen(3000);

/*
使用流（stream）的形式，可以大大提升响应时间，又能有效减轻服务器内存的压力
*/
var server2 = http.createServer(function (req, res) {
    var stream = fs.createReadStream(__dirname + '/data.txt');
    stream.pipe(res); // destination是res
});
server2.listen(4000);

var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('servers ');
rs.push('are listening on\n');
rs.push('3000 and 4000\n');
rs.push(null);

rs.pipe(process.stdout);