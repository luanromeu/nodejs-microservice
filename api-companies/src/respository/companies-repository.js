'use strict'

const Companies = require('../models/companies-models')
const sequelize = require('sequelize')
const Sequelize = require('../../db')

//#region sql commands
const cmdsqlcompanies = `
    SELECT * FROM empresas
    WHERE empresas.id = ? 
`;

const cmdsqlcompaniesfilter = `
    SELECT * FROM empresas
     WHERE empresas.tipo = ?
     AND   empresas.razao_social = ?
`;
//#endregion

exports.list = async (id) => {
    try {

      const query = await  Sequelize.query(cmdsqlcompanies, 
        { type: Sequelize.QueryTypes.SELECT, replacements: [id]});

        return query;

    } catch (e) {
        throw new Error(e);
    }
}


exports.filter = async (filter) => {
    try {
      const query = await  Sequelize.query(cmdsqlcompaniesfilter, 
        { type: Sequelize.QueryTypes.SELECT, replacements: [filter.enterprise_types, filter.name]});
     
        return query;

    } catch (e) {
        throw new Error(e);
    }
}