'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    url: DataTypes.TEXT,
    mainImage: DataTypes.BOOLEAN,
    show: DataTypes.BOOLEAN,
    ArticleId: DataTypes.INTEGER,
  }, {});
  Image.associate = function (models) {
    // associations can be defined here
    Image.belongsTo(models.Article)
  };
  return Image;
};