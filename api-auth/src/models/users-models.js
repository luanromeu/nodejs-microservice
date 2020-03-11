const sequelize = require('../../db');
const Sequelize = require('sequelize');

const users = sequelize.define('usuarios', {
email: {
    type: Sequelize.STRING
  },
password: {
    type: Sequelize.STRING
  },
  created_at: Sequelize.DATE,
  updated_at: Sequelize.DATE,
}, {
    freezeTableName: true,
    timestamps: false
  });

  users.sync().then(() => {
  return users;
});

module.exports = users;