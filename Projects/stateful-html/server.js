var http = require('http');
var fs = require('fs');
var path = require('path');

//returns boolean true if endoint exists false otherwise
function handleEndpoints (request, response) {
    
    if(!request?.url) return false
    //handle index / webpage
    if(request.url.includes('.') || request.url === '/') return false

    const contentType = 'text/html'
    let content = ''

    switch(request.url) {
        case '/friends-list':
            console.log('ran ')
            content = `<p t-watch t-get='/friends-list'>Fetched Friends: Jason, Mike, Lisa</p>`
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
            return true
    }

}
http.createServer(function (request, response) {

    if(handleEndpoints(request, response)) return

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');