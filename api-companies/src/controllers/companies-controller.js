'use strict'

const Repository = require('../respository/companies-repository')


exports.listOne = async (req, res) => {
    try {
        const {id} = req.params;
        let company = await Repository.list(id)
        if (company)
        res.status(200).send(company)
    } catch (err) {
        console.log(err)
        res.status(500)
        res.send({
            message: 'Erro ao buscar empresa '
        })
    }
}


exports.filter = async (req, res) => {
    try {
          let filter = req.query;
          let enterpises = await Repository.filter(filter)
          res.status(200).send(enterpises)
    } catch (err) {
        console.log(err)
        res.status(500)
        res.send({
            message: 'Erro ao filtrar empresas '
        })
    }
}