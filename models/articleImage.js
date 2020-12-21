'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleImage = sequelize.define('ArticleImage', {
    url: DataTypes.TEXT,
    mainImage: DataTypes.BOOLEAN,
    show: DataTypes.BOOLEAN,
    ArticleId: DataTypes.INTEGER,
  }, {});
  ArticleImage.associate = function (models) {
    // associations can be defined here
    ArticleImage.belongsTo(models.Article)
  };
  return ArticleImage;
};