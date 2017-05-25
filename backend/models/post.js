'use strict';
module.exports = function(sequelize, DataTypes) {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    favorite: DataTypes.STRING,
    url: DataTypes.STRING
  });
  return Post;
};
