const User = require('../models/User');
const Post = require("./Post");
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
module.exports = { User };
module.exports = { User, Post };