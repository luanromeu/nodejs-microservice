'use strict'

const User = require('../models/users-models')

exports.authenticate = async (data) => {
  const result = await
     User.findOne({
          where: {
              email: data.email,
              password: data.password,
          }
      })
  return result;
}  
