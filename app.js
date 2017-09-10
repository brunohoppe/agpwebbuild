'use strict';

const Hapi = require('hapi');
const MongoDB = require('hapi-mongodb');
const dbconfig = require('./config/dbconfig');
const env = process.env;
const Good = require('good');


// Create a server with a host and port
const server = new Hapi.Server();

var routes = require('./routes.js'); //require routes

var host = env.NODE_IP || 'localhost';
var port = env.NODE_PORT || 3001;
var options = dbconfig.config('admin', 'bot3598');
console.log(options);


server.connection({
    host: host,
    port: port
});

// Add the route
for (var route in routes) {
    server.route(routes[route]);
}

server.register({
    register: MongoDB,
    options: options
}, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }

    server.start((err) => console.log('Server started at:', server.info.uri));
});
