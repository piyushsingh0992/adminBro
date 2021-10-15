const { default: AdminBro } = require('admin-bro');
const AdminBroSequelize = require('@admin-bro/sequelize')

AdminBro.registerAdapter(AdminBroSequelize)

const { Piyush } = require('./companies/company.entity');

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [Piyush],
  rootPath: '/admin',
};

module.exports = options;
