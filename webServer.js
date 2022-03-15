// node.js에서 제공하는 'http'모듈 불러오기
//node.js에서 제공하는 모듈 불러올 때 require 사용(api 참고)
const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

//createServer : Returns a new instance of http.Server.
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
