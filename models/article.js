'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    articleId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    category: DataTypes.TEXT,
    title: DataTypes.TEXT,
    content: DataTypes.TEXT('long'),
    sort: DataTypes.INTEGER,
    show: DataTypes.BOOLEAN
  }, {});
  Article.associate = function (models) {
    // associations can be defined here
    Article.hasMany(models.ArticleImage)
  };
  return Article;
};