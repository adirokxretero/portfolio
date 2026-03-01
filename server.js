const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                fs.readFile('./index.html', (err, htmlContent) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(htmlContent || '404 Not Found', 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const os = require('os');
const networkInterfaces = os.networkInterfaces();
let ipAddress = 'localhost';

for (const interfaceName in networkInterfaces) {
    const addresses = networkInterfaces[interfaceName];
    for (const address of addresses) {
        if (address.family === 'IPv4' && !address.internal) {
            ipAddress = address.address;
            break;
        }
    }
}

server.listen(PORT, '0.0.0.0', () => {
    console.log(`\n🚀 Portfolio is running locally at: http://localhost:${PORT}`);
    console.log(`🌍 Share on your local network:   http://${ipAddress}:${PORT}\n`);
});
