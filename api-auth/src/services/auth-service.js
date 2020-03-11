'use strict'

const jwt = require('jsonwebtoken');
const config = require('../../../config')


exports.generateToken = async (data) => {
   
    const result = await
     jwt.sign(data ,config.SALT_KEY,{ expiresIn: '365d' });
     
     return result;
}

exports.decodeToken = async (token) => {
    var data = await jwt.verify(token, global.SALT_KEY);
    return data;
}

exports.authorize = function (req, res, next) {
    var token = req.body.token || req.query.token || req.headers['access-token'];
    
    if (!token) {
        res.status(401).json({
            message: 'Access Denied'
        });

    } else {
        jwt.verify(token, global.SALT_KEY, function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Invalid Token'
                });
            } else {
                req.body.idUsuario = decoded.id
                next();
            }
        });
    }
};

exports.verifyToken = function (req, res, next) {

    var token = req.body.token || req.query.token || req.headers['access-token'];
    var uid = req.body.uid || req.query.uid || req.headers['uid'];
    var client = req.body.client || req.query.client || req.headers['client'];
    
    if (!token || !uid || !client) {
        res.status(401).json({
            message: 'Access Denied'
        });
    } else {
        jwt.verify(token , global.SALT_KEY ,function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Invalido'
                });
            } else {
                res.status(200).json({
                    message: 'Token valido',
                    decoded:decoded
                });
                next();
       
            }
        });
    }
};



