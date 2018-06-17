import crypto from 'crypto';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    salt: DataTypes.STRING,
    password: {
      type: DataTypes.VIRTUAL,
      set (value) {
        this.setDataValue(value);

        const salt = crypto.randomBytes(32).toString('base64');
        const passwordHash = crypto.pbkdf2Sync(value, salt, 10000, 32, 'sha256').toString('base64');

        this.setDataValue('salt', salt);
        this.setDataValue('passwordHash', passwordHash);
      }
    }
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.validPassword = function (password) {
    const salt = this.getDataValue('salt');
    const passwordHash = this.getDataValue('passwordHash');
    const checkedHash = crypto.pbkdf2Sync(password, salt, 10000, 32, 'sha256').toString('base64');

    return checkedHash === passwordHash;
  };

  return User;
};
