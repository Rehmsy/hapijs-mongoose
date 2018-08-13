/*eslint-disable */

const Hapi = require('hapi');
const Mongoose = require('mongoose');
const Wolf = require('./lib/models/wolf');
//const port = process.env.PORT || 4000;

Mongoose.connect('mongodb://localhost:27017/switch');
Mongoose.connection.once('open', () => {
    console.log('connected to database');
});

const server = Hapi.Server({  
    host: 'localhost',
    port: 4000
});

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function(request) {
            return 'Hello, dumb world!';
        }
    },
    {
        method: 'GET',
        path: '/api',
        handler: function(request) {
            return 'Hello dumb Hapi API!';
        }
    },
    {
        method: 'GET',
        path: '/api/wolves',
        handler: function(request) {
            return 'Hello dumb Hapi Wolf API!';
        }
    },
    {
        method: 'POST',
        path: '/api/wolves',
        handler: (req, reply) => {
            const { name } = req.payload;
            const wolf = new Wolf({
                name
            });

            return reply.response(wolf).code(200);
        }
    }
]);

const init = async() => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
module.exports = server;