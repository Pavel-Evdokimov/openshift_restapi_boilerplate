/*jslint node: true*/
'use strict';

var connection_string_default = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;

var connection_string = '';
if (!process.env.MONGODB_URL) {
  connection_string = connection_string_default;
} else {
  connection_string = process.env.MONGODB_URL + process.env.OPENSHIFT_APP_NAME;
}

module.exports = {
  db: connection_string,
  ipaddress: process.env.OPENSHIFT_NODEJS_IP,
  port: process.env.OPENSHIFT_NODEJS_PORT || 8081
};
