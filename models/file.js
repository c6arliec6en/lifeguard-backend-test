'use strict';
module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    category: DataTypes.STRING,
    title: DataTypes.TEXT,
    url: DataTypes.TEXT,
    show: DataTypes.BOOLEAN
  }, {});
  File.associate = function (models) {
    // associations can be defined here
  };
  return File;
};