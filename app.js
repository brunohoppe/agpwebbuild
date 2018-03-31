'use strict';
const Hapi = require('hapi');
const request__ = require('request');
// const MongoDB = require('hapi-mongodb');
// const dbconfig = require('./config/dbconfig');
const inert = require('inert');
const h2o2 = require('h2o2');
const env = process.env;
const Good = require('good');
// Create a server with a host and port
const server = new Hapi.Server();
var routes = require('./routes.js'); //require routes
// var host = env.NODE_IP || 'localhost';
var port = env.PORT || 3001;
// var options = dbconfig.config('admin', 'bot3598');
server.connection({
    port: port
});
// Add the route

server.register([
//     {
//     register: MongoDB,
//     options: options
// },
{ register: h2o2,
    options: {}
},
{
    register: inert,
    options: {}
}], (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    //Serving static files
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'dist'
            }
        }
    });
    for (var route in routes) {
        server.route(routes[route]);
    }
    // server.route({
    //     method: 'POST',
    //     path: '/authentication/{params*}',
    //     config: {
    //       handler: {
    //         proxy: {
    //             uri: '{protocol}://goclassbackend14-env.sa-east-1.elasticbeanstalk.com/{path}',
    //             passThrough: true,
    //             xforward: true
    //         }
    //       }
    //     }
    // });
    // server.route({
    //     method: '*',
    //     path: '/api/{params*}',
    //     config: {
    //       handler: {
    //         proxy: {
    //             uri: '{protocol}://goclassbackend14-env.sa-east-1.elasticbeanstalk.com/{path}',
    //             passThrough: true,
    //             xforward: true
    //         }
    //       }
    //     }
    // });
    server.route({
        method: '*',
        path: '/agpdominios/{params*}',
        config: {
          handler: {
            proxy: {
                uri: '{protocol}://goclassbackend14-env.sa-east-1.elasticbeanstalk.com/{path}',
                passThrough: true,
                xforward: true
            }
          }
        }
    });
    server.start((err) => console.log('Server started at:', server.info.uri));
});
