// require - importing in node.js -- ./ local file (adds js automatically)
const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000);
