const path = require('path');
const gateway = require('express-gateway');
const httpProxy = require('http-proxy');

gateway()
    .load(path.join(__dirname, 'config'))
    .run();

/**
 * Proxy web-sockets
 */
httpProxy.createServer({
    target: process.env.GRAPHQL_WS,
    ws: true
}).listen(8000);
