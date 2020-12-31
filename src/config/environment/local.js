'use strict';

/*configuration specific production*/
const path = require("path");

module.exports = {
  host: 'localhost',
  port: 3000,
  mongodb: {
    server_config: {
      username: '',
      password: '',
      host: 'localhost',
      port: 27017
    },
    dbName: 'projectManagement-local',
  },
};
