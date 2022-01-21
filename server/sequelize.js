const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://acxdsuficmppgr:a188cfa3f1ab2ffe2f25094aff91d362d6af149e37deae812cf25a46cd9bc901@ec2-54-87-112-29.compute-1.amazonaws.com:5432/d2iobgqbdcdvj5",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnathorized: false,
      },
    },
  }
);

module.exports = sequelize;
