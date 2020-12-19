'use strict';
module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: DataTypes.TEXT,
    videoUrl: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    sort: DataTypes.INTEGER,
    show: DataTypes.BOOLEAN,
  }, {});
  Video.associate = function (models) {
    // associations can be defined here
  };
  return Video;
};