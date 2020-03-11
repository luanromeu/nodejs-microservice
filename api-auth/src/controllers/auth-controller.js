'use strict'

const Repository = require('../repository/auth-repository')
const authService = require('../services/auth-service')
const md5 = require('md5');



exports.authenticate = async (req, res, next) => {
    try {
        const user = await Repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password)
        });

        if (!user) {
            res.status(401).send({
                message: 'Usuário ou senha inválidos'
            });
            throw new Error('Usuário ou senha inválidos');
        }  
            const token = await authService.generateToken({
                email: user.email,
                password: user.password
            });

            res.status(200).send({
                'access-token': token,
                 'client': user.email,
                 'uid': user.id
            });


    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar requisição'
        });
    }
};


