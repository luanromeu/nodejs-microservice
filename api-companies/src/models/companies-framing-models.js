const sequelize = require('../../db');
const Sequelize = require('sequelize');

const empresas_enquadramento = sequelize.define('empresas_enquadramento', {
natureza_juridica: {
    type: Sequelize.STRING
  },
ente_federativo: {
    type: Sequelize.STRING
  },
motivo: {
    type: Sequelize.STRING
},
capital_social: {
    type: Sequelize.STRING
},
porte: {
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

empresas_enquadramento.sync({ force: false }).then(() => {
  return empresas_enquadramento;
});

module.exports = empresas_enquadramento;