(function() {
    'use strict';

    function routes() {
        const Joi = require('joi');
        var routesArr = [];
        //------Default Routes------//
        routesArr = routesArr.concat(defaultArrRoutes());
        //------Lista De Compras Routes------//
        routesArr = routesArr.concat(listacomprasArrRoutes(Joi));
        //------Supermercado Routes------//
        routesArr = routesArr.concat(supermercadoArrRoutes(Joi));
        //------Produto Routes------//
        routesArr = routesArr.concat(produtoArrRoute());

        routesArr = routesArr.concat(usuarioArrRoute(Joi));

        return routesArr;
    }

    function defaultArrRoutes() {
        return [{
            method: 'GET',
            path: '/',
            config: {
                handler: (request, reply) => {
                    reply('Server On');
                }
            }
        }, ];
    }

    function listacomprasArrRoutes(Joi) {
        return [{
            method: 'GET',
            path: '/listacompras',
            config: {
                handler: (request, reply) => {
                    let db = request.server.plugins['hapi-mongodb'].db;
                    reply(db.collection('listacompras').find({}).toArray());
                },
                cors: true
            }
        }, {
            method: 'POST',
            path: '/listacompras',
            config: {
                handler: (request, reply) => {
                    let lista = request.payload;
                    let db = request.server.plugins['hapi-mongodb'].db;
                    db.collection('listacompras').save(lista, (err, result) => {
                        if (err) return reply(Boom.wrap(err, "Internal MongoDB error"));
                        reply(lista);
                    });
                },
                validate: {
                    payload: {
                        nome: Joi.string().min(5).max(100).required()
                    }
                },
                cors: true
            }
        }];
    }

    function supermercadoArrRoutes(Joi) {
        return [{
            method: 'GET',
            path: '/supermercados',
            handler: (request, reply) => {
                var db = request.server.plugins['hapi-mongodb'].db;
                reply(db.collection('supermercados').find({}).toArray());
            }
            // cors: true
        }, {
            method: 'POST',
            path: '/supermercado',
            config: {
                handler: (request, reply) => {
                    let supermercado = request.payload;
                    var db = request.server.plugins['hapi-mongodb'].db;
                    db.collection('supermercados').save(supermercado, (err, result) => {

                        if (err) return reply(Boom.wrap(err, "Internal MongoDB error"));
                        reply(supermercado);
                    });
                },
                validate: {
                    payload: {
                        nome: Joi.string().min(5).max(20).required()
                    }
                },
                cors: true
            }
        }];
    }

    function produtoArrRoute() {
        return [{
            method: 'GET',
            path: '/produtos',
            config: {
                handler: (request, reply) => {
                    var db = request.server.plugins['hapi-mongodb'].db;
                    reply(db.collection('produto').find({}).limit(20).toArray());
                },
                cors: true
            }
        }, {
            method: 'GET',
            path: '/produto/{nome}',
            config: {
                handler: (request, reply) => {
                    var db = request.server.plugins['hapi-mongodb'].db;
                    var query = {
                        nome: new RegExp('^' + request.params.nome, 'i')
                    };
                    reply(db.collection('produto').find(query).limit(20).toArray());

                },
                cors: true

            }
        }, ];
    }

    function usuarioArrRoute(Joi) {
        return [{
            method: 'GET',
            path: '/usuarios',
            config: {
                handler: (request, reply) => {
                    var db = request.server.plugins['hapi-mongodb'].db;
                    reply(db.collection('usuarios').find({}).limit(20).toArray());
                },
                cors: true
            }
        }, {
            method: 'GET',
            path: '/usuario',
            config: {
                handler: (request, reply) => {
                    var db = request.server.plugins['hapi-mongodb'].db;
                    db.collection('usuarios').findOne({
                        "facebookid": request.query.facebookid
                    }, function(err, result) {
                        if (err) return reply(Boom.internal('Internal MongoDB error', err));
                        reply(result);
                    });

                },
                cors: true

            }
        }, {
            method: 'GET',
            path: '/usuario/login',
            config: {
                handler: (request, reply) => {
                    var db = request.server.plugins['hapi-mongodb'].db;
                    db.collection('usuarios').findOne({
                        "email": request.query.email,
                        "senha": request.query.senha
                    }, function(err, result) {
                        if (err) return reply(Boom.internal('Internal MongoDB error', err));
                        reply(result);
                    });

                },
                cors: true

            }
        }, {
            method: 'GET',
            path: '/usuario/{id}',
            config: {
                handler: (request, reply) => {
                    var db = request.server.plugins['hapi-mongodb'].db;
                    var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;
                    db.collection('usuarios').findOne({
                        "_id": new ObjectID(request.params.id)
                    }, function(err, result) {
                        if (err) return reply(Boom.internal('Internal MongoDB error', err));
                        reply(result);
                    });

                },
                cors: true

            }
        }, {
            method: 'POST',
            path: '/usuario/novo',
            config: {
                handler: (request, reply) => {
                    let usuario = request.payload;
                    var db = request.server.plugins['hapi-mongodb'].db;
                    db.collection('usuarios').save(usuario, (err, result) => {
                        if (err) return reply(Boom.wrap(err, "Internal MongoDB error"));
                        reply(usuario);
                    });
                },
                validate: {
                    payload: {
                        nome: Joi.string().min(5).max(20).required(),
                        cpf: Joi.string().min(11).max(11),
                        email: Joi.string().email().required(),
                        perfil: Joi.string(),
                        senha: Joi.string().min(4).required(),
                        telefone: Joi.string(),
                        telwhatsapp: Joi.string(),
                        endereco: Joi.array(),
                        facebookid: Joi.string(),
                    }
                },
                cors: true
            }
        }, {
            method: 'POST',
            path: '/usuario/completo',
            config: {
                handler: (request, reply) => {
                    let usuario = request.payload;
                    var db = request.server.plugins['hapi-mongodb'].db;
                    db.collection('usuarios').save(usuario, (err, result) => {
                        if (err) return reply(Boom.wrap(err, "Internal MongoDB error"));
                        reply(usuario);
                    });
                },
                validate: {
                    payload: {
                        nome: Joi.string().min(5).max(20).required(),
                        cpf: Joi.string().min(11).max(11).required(),
                        email: Joi.string().email().required(),
                        perfil: Joi.string().required(),
                        senha: Joi.string().min(4).required(),
                        telefone: Joi.string().required(),
                        telwhatsapp: Joi.string().required(),
                        endereco: Joi.array().required(),
                        facebookid: Joi.string(),
                    }
                },
                cors: true
            }
        },
        {
            method: 'POST',
            path: '/login',
            config: {
                handler: (request, reply) => {
                    var db = request.server.plugins['hapi-mongodb'].db;
                    let usuario = request.payload;
                    db.collection('usuarios').findOne({
                        "email": usuario.email,
                        "senha": usuario.senha
                    }, function(err, result) {
                        if (err) return reply(Boom.internal('Internal MongoDB error', err));
                        if(!result){
                            return reply({}).code(404);
                        }
                        return reply(result);
                        
                    });

                },
                cors: true

            }
        }];
    }
    module.exports = routes();
})();
