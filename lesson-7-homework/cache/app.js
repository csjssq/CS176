const http = require('http');
const fs = require('fs');
const server = 
http
  .createServer(function(request, response) {
    if (request.url === '/') {
      const html = fs.readFileSync('index.html', 'utf8');
      response.writeHead(200, {
        'Content-Type': 'text/html'
        
      });
      response.end(html);
    }

    if (request.url === '/script.js') {
      const logJs = fs.readFileSync('log.js');
      response.writeHead(200, {
        'Content-Type': 'text/javacript',
        'Cache-Control': 'max-age=20'
        // 'Cache-Control': 'no-store'
        // 'Cache-Control':'no-cache'
      });
      response.end(logJs);
    }
  });
  server.listen(3000);
  console.log('server is running')