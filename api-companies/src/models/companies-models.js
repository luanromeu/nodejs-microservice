const sequelize = require('../../db');
const Sequelize = require('sequelize');

const empresas = sequelize.define('empresas', {
razao_social: {
    type: Sequelize.STRING
  },
nome_fantasia: {
    type: Sequelize.STRING
  },
email: {
    type: Sequelize.STRING
},
telefone: {
    type: Sequelize.STRING
},
created_at: Sequelize.DATE,
updated_at: Sequelize.DATE,
}, {
    freezeTableName: true,
    timestamps: false
  });

  empresas.sync({ force: false }).then(() => {

  return empresas;

});

module.exports = empresas;