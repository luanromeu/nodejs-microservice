const Sequelize = require('sequelize');
const sequelize = new Sequelize('dev', 'dev', 'dev', {
  host: 'mysql',
  dialect: 'mysql',
  operatorsAliases: false,
  timezone: '-03:00', // for writing to database
  connectionTimeout:10000,
  logging: false,
  define: {
    timestamps: false
  }
 });

sequelize
  .authenticate()
  .then(() => {
    console.log('Conectado ao banco' );
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco:', err);
  });

module.exports = sequelize;