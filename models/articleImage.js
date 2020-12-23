'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleImage = sequelize.define('ArticleImage', {
    articleImageId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    url: DataTypes.TEXT,
    mainImage: DataTypes.BOOLEAN,
    show: DataTypes.BOOLEAN,
    ArticleId: DataTypes.UUID
  }, {});
  ArticleImage.associate = function (models) {
    // associations can be defined here
    ArticleImage.belongsTo(models.Article, { foreignKey: 'articleId' })
  };
  return ArticleImage;
};


