const sequelize = require('../../db');
const Sequelize = require('sequelize');

const empresas_situacao = sequelize.define('empresas_situacao', {
situacao: {
    type: Sequelize.STRING
  },
data: {
    type: Sequelize.STRING
  },
motivo: {
    type: Sequelize.STRING
},
empresas_id: {
    type: Sequelize.INTEGER
},
created_at: Sequelize.DATE,
updated_at: Sequelize.DATE,
}, {
    freezeTableName: true,
    timestamps: false
  });

empresas_situacao.sync({ force: false }).then(() => {
  return empresas_situacao;
});

module.exports = empresas_situacao;