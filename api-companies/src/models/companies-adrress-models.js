const sequelize = require('../../db');
const Sequelize = require('sequelize');

const empresas_endereco = sequelize.define('empresas_endereco', {
logradouro: {
    type: Sequelize.STRING
  },
bairro: {
    type: Sequelize.STRING
  },
cidade: {
    type: Sequelize.STRING
},
cep: {
    type: Sequelize.STRING
},
cod_ibge: {
    type: Sequelize.STRING
},
empresas_id : {
    type: Sequelize.INTEGER
},
created_at: Sequelize.DATE,
updated_at: Sequelize.DATE,
}, {
    freezeTableName: true,
    timestamps: false
  });

  empresas_endereco.sync({ force: false }).then(() => {
  return empresas_endereco;
});

module.exports = empresas_endereco;