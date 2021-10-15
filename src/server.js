const express = require('express');
const { default: AdminBro } = require('admin-bro');
const { Sequelize } = require('sequelize');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

const app = express();
const port = 3000;

const run = async () => {
  const sequelize = new Sequelize('test', 'root', 'shelly@97', {
    host: 'localhost',
    dialect:'mysql'
  });

  try {
    await sequelize.authenticate();
    console.log(' piyush Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);
  app.use(admin.options.rootPath, router);
  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
};


module.exports = run;
