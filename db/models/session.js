'use strict';
module.exports = (sequelize, DataTypes) => {
  var Session = sequelize.define('Session', {
    sid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});

  Session.associate = function(models) {
    // associations can be defined here
  };

  return Session;
};
