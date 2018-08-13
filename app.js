/*eslint-disable */

const Hapi = require('hapi');
//const port = process.env.PORT || 4000;
const server = new Hapi.Server({  
    host: 'localhost',
    port: 4000
});

const routes = require('./routes');
server.route(routes);

server.route({
    method: 'GET',
    path: '/',
    handler: function(request) {
        return 'Hello, dumb world!';
    }
});

server.route({
    method: 'GET',
    path: '/api',
    handler: function(request) {
        return 'Hello dumb Hapi API!';
    }
});

server.start((err) => {
    if(err) {
        throw err;
    }
    console.log('Server running at: ${server.info.uri}');
});

exports.server = server;