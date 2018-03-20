'use strict';

// the Object from the library ...
var Sequelize = require('sequelize');

var db = {};

var DBInfo = {
    username: "root",
    password: "",   // <----------------- Your Password here
    database: "job_search_organizer",
    host: "127.0.0.1",
    dialect: "mysql",
};

var sequelize = new Sequelize(DBInfo.database, DBInfo.username, DBInfo.password, {
    host: DBInfo.host,
    dialect: DBInfo.dialect,
    logging: false,
    freezeTableName: true,
    operatorsAliases: false
});

db.sequelize = sequelize; // the library
db.Sequelize = Sequelize;

db.company = require('../models/company.js')(sequelize, Sequelize);
db.companyLocation = require('../models/companyLocation.js')(sequelize, Sequelize);
db.contactPerson = require('../models/contactPerson.js')(sequelize, Sequelize);
db.job = require('../models/job.js')(sequelize, Sequelize);
db.jobCompany = require('../models/jobCompany.js')(sequelize, Sequelize);

//Relations
// ===> n-m relationships
db.job.hasMany(db.jobCompany, { onDelete: 'cascade' });
db.jobCompany.belongsTo(db.job);
db.jobCompany.belongsTo(db.company);
db.company.hasMany(db.jobCompany, { onDelete: 'cascade' })
//Relations
// ===> 1-n relationships
db.company.hasMany(db.contactPerson, { onDelete: 'cascade' });
db.contactPerson.belongsTo(db.company);

db.company.hasMany(db.companyLocation, { onDelete: 'cascade' });
db.companyLocation.belongsTo(db.company);

module.exports = db;
