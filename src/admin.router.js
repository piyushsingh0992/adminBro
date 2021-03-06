const { default: AdminBro } = require('admin-bro');
const { buildRouter } = require('@admin-bro/express')
const express = require('express');

/**
 * @param {AdminBro} admin
 * @return {express.Router} router
 */
const buildAdminRouter = (admin) => {
  const router = buildRouter(admin);
  return router;
};

module.exports = buildAdminRouter;
