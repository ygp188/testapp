const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate() {}
  }
  Post.init(
    { title: DataTypes.STRING, body: DataTypes.STRING },
    {
      sequelize,
      modelName: 'Post',
    },
  );
  return Post;
};
